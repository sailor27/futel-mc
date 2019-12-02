import * as p5module from 'p5/lib/p5';
import 'p5/lib/addons/p5.sound';

export default function mic(p) {
  let mic, recorder, soundFile, micLevel;

  p.setup = () => {
    mic = new p5module.AudioIn();
    recorder = new p5module.SoundRecorder();

    // prompts user to enable their browser mic
    mic.start();

    // connect the mic to the recorder
    recorder.setInput(mic);
     p.background(163, 161, 247);
  };

  p.draw = () => {
    p.getAudioContext().resume();
    micLevel = mic.getLevel();
    
    if(micLevel) p.ellipse(
      p.width / 2,
      p.constrain(p.height - micLevel * p.height * 5, 0, p.height),
      10,
      10
    );
  }

  function resetSoundFile() {
    soundFile.play();
    soundFile = new p5module.SoundFile();
  }

  function handleRecording(isRecording, saveSoundFileToState, recordingReady) {

    // make sure user enabled the mic
    if (isRecording && mic.enabled) {
      p.background(70, 48, 235); // darker purple
      // record to p5.SoundFile
      soundFile = new p5module.SoundFile();
      
      recorder.record(soundFile);
    }

    if (!isRecording && !recordingReady) {
      p.getAudioContext().resume();
      p.background(163, 161, 247); // lighter purple

      //setTimeout helps with buffer bug
      setTimeout(() => {
        recorder.stop();

        saveSoundFileToState(soundFile.getBlob(), resetSoundFile);
      }, 1500);
    }
  }
  p.myCustomRedrawAccordingToNewPropsHandler = newProps => {
    const {isRecording, saveSoundFileToState, recordingReady} = newProps;
    if (mic) {
      handleRecording(isRecording, saveSoundFileToState, recordingReady);
    }
  };
}
