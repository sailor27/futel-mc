import React, {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import {mic} from './p5';
import  { FirebaseContext } from './Firebase';


class App extends Component{
constructor(){
    super();
    this.state = {
      isRecording: false,
      recordingReady: false,
      sound: null
    }
    this.deleteUser = this.deleteUser.bind(this);
    this.toggleRecording = this.toggleRecording.bind(this);
    this.handleRecordingReady = this.handleRecordingReady.bind(this);
  }

  toggleRecording() {
    this.setState({isRecording: !this.state.isRecording})
  }

  handleRecordingReady(recording) {
    if (recording) this.setState({
      recordingReady: true,
      sound: recording
    });
  }


  deleteUser(fb){
    fb.db.collection('users').doc('NLi76ZESLb5ZVcUfqflw')
      .delete()
      .then(() => console.log('deleted'))
      .catch((err) => console.log(err))
  }

  render() {
    const {isRecording, recordingReady} = this.state;
    return(
      <FirebaseContext.Consumer>
        {firebase => {
          // this.deleteUser(firebase);
          return (
            <>
              <button onClick={this.toggleRecording}>Record/Stop</button>
              <P5Wrapper
                sketch={mic}
                handleRecordingReady={this.handleRecordingReady}
                recordingReady={recordingReady}
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
