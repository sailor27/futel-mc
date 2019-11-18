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
    // soundFile = new p5module.SoundFile();
  }

  function resetSoundFile() {
    soundFile.play();
    soundFile = new p5module.SoundFile();
  }

  function handleRecording(isRecording, saveSoundFileToState, recordingReady) {

    // make sure user enabled the mic
    if (isRecording && mic.enabled) {
      // record to p5.SoundFile
      soundFile = new p5module.SoundFile();
      recorder.record(soundFile);
    }


    if (!isRecording && !recordingReady) {
      p.getAudioContext().resume();
      console.log('stop recording')
      //setTimeout helps with buffer bug
      setTimeout(() => {
        recorder.stop();
       
        saveSoundFileToState(soundFile.getBlob(), resetSoundFile)
      }, 1500)
    }

  }
  p.myCustomRedrawAccordingToNewPropsHandler = (newProps) => {
      const {isRecording, saveSoundFileToState, recordingReady} = newProps;
      if (mic) {
        handleRecording(isRecording, saveSoundFileToState, recordingReady);
      }
    }

}
