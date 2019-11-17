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
          this.setState({
            sound: undefined
          })
      });
    }
  }

  saveSoundFileToState(recording, callback) {
    if (recording) this.setState({
      recordingReady: true,
      sound: recording
    }, callback());
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
