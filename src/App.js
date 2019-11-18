import React, {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import {mic} from './p5';
import  { FirebaseContext } from './Firebase';

class App extends Component{
constructor(){
    super();
    this.state = {
      isRecording: false,
      recordingReady: false
    }
    this.toggleRecording = this.toggleRecording.bind(this);
    this.saveSoundFileToState = this.saveSoundFileToState.bind(this);
    this.saveRecording = this.saveRecording.bind(this);
  }

  toggleRecording() {

    // clear previous recording
    if (this.state.sound) {
      this.setState({
        sound: undefined,
        recordingReady: false
      })
    }

    this.setState({
      isRecording: !this.state.isRecording,
    });
  }

  saveRecording(fb) {
    if (this.state.sound) {
      const data = {
        uid: new Date().getTime(),
        sound: this.state.sound
      }
  
        const storageRef = fb.storage.ref();
        const testsRef = storageRef.child('tests');
        const test = testsRef.child(`${data.uid.toString()}`);
  
        test.put(data.sound)
        .then(() => {
          console.log(`uploaded ${data.sound} to ${test}`);
      });
    }
  }

  clearRecording() {
     this.setState({
      sound: undefined,
      recordingReady: false
    })
  }

  saveSoundFileToState(soundFile, clearP5File) {
    if (soundFile) this.setState({
      recordingReady: true,
      sound: soundFile
    }, clearP5File());
  }

  render() {
    const {isRecording, recordingReady} = this.state;
    return(
      <FirebaseContext.Consumer>
        {firebase => {
          return (
            <>

              <button onClick={this.toggleRecording}>Record/Stop</button>
              <button onClick={() => this.saveRecording(firebase)}>Save</button>
              {isRecording && <h1>RECORDING</h1>}
              <P5Wrapper
                sketch={mic}
                recordingReady={recordingReady}
                saveSoundFileToState={this.saveSoundFileToState}
                isRecording={isRecording}
              />
              
            </>
          )
          
        }}
      </FirebaseContext.Consumer>
    )
  }
}

export default App;
