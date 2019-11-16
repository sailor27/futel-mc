import * as p5module from 'p5/lib/p5';
import 'p5/lib/addons/p5.sound';


export default function mic(p) {
  let mic, recorder, soundFile;

  p.setup = () => {
    mic = new p5module.AudioIn();
    // prompts user to enable their browser mic
    mic.start();

    // create a sound recorder
    recorder = new p5module.SoundRecorder();

    // connect the mic to the recorder
    recorder.setInput(mic);

    // this sound file will be used to
    // playback & save the recording
    soundFile = new p5module.SoundFile();
  }

  function handleSave() {
    soundFile.play(); // play the result!
    p.save(soundFile, 'mySound.wav');
  }

  function handleRecording(isRecording, handleRecordingReady, recordingReady) {
    
  // make sure user enabled the mic
  if (isRecording && mic.enabled) {
    console.log('isRecording')
    // record to our p5.SoundFile
    recorder.record(soundFile);

    p.background(255,0,0);
    p.text('Recording!', 20, 20);
    
    //stop recording on a timer
    // setTimeout(() => {
    //   recorder.stop();
    //   console.log(soundFile)
    // }, 3000)
  }

  if (!isRecording && !recordingReady) {
    p.getAudioContext().resume();

    //setTimeout helps with buffer bug
    setTimeout(() => {
      recorder.stop();
      console.log(soundFile)
  
      handleRecordingReady(soundFile);
    }, 1000)
  }

  if(!isRecording && recordingReady){
    p.background(255,0,0);
    p.text('Saving Recording', 20, 20);
    soundFile.play();
    handleSave();
  }
}


  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      const {isRecording, handleRecordingReady, recordingReady} = newProps;
      if(mic){
        handleRecording(isRecording, handleRecordingReady, recordingReady);
      }
    }

}
