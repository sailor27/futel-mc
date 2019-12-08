import * as p5module from 'p5/lib/p5';
import visualizer from './visualizer'; 
import 'p5/lib/addons/p5.sound';

export default function mic(p) {
  let mic, recorder, soundFile, fft;

  p.setup = () => {
    mic = new p5module.AudioIn();
    recorder = new p5module.SoundRecorder();
    fft = new p5module.FFT(0.9, 32);

    // create 256 x 256 p5 canvas
    p.createCanvas(256, 256);

    // prompts user to enable their browser mic
    mic.start();

    // connect the mic to the recorder
    recorder.setInput(mic);

    // use fast fourier transform on mic input
    fft.setInput(mic);   

    // draw loop to visualize fft
    visualizer(p, fft);
 
  };  
  
  function resetSoundFile() {
    soundFile.play();
    soundFile = new p5module.SoundFile();
  }

  function handleRecording(isRecording, handleSoundFile, recordingReady) {
    // make sure user enabled the mic
    if (isRecording && mic.enabled) {
      // p.background(70, 48, 235); // darker purple
      
      // record to p5.SoundFile
      soundFile = new p5module.SoundFile();
      
      recorder.record(soundFile);
    }

    if (!isRecording && !recordingReady && soundFile) {
      p.getAudioContext().resume();
      // p.background(163, 161, 247); // lighter purple

      //setTimeout helps with buffer bug
      setTimeout(() => {
        recorder.stop();

        handleSoundFile(soundFile.getBlob(), resetSoundFile);
      }, 1500);
    }
  }
  p.myCustomRedrawAccordingToNewPropsHandler = newProps => {
    const {isRecording, handleSoundFile, recordingReady} = newProps;

    if (mic) {
      handleRecording(isRecording, handleSoundFile, recordingReady);
    }
  };
}


