/** @jsx jsx */
import {Component} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import  {jsx} from '@emotion/core';
import {mic} from './p5';
import {FirebaseContext} from './Firebase';
import Visualizer from './Visualizer';
import Button from './Button';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isRecording: false,
      recordingReady: false,
    };
    this.toggleRecording = this.toggleRecording.bind(this);
    this.saveSoundFileToState = this.saveSoundFileToState.bind(this);
    this.saveRecording = this.saveRecording.bind(this);
  }

  // componentDidMount(){
  //    this.toggleRecording();
  //   setTimeout(() => {
  //     this.toggleRecording();
  //   }, 1500);
  // }

  toggleRecording() {
    // clear previous recording
    if (this.state.sound) {
      this.setState({
        sound: undefined,
        recordingReady: false,
      });
    }

    this.setState({
      isRecording: !this.state.isRecording,
    });
  }

  saveRecording(fb) {
    if (this.state.sound) {
      const data = {
        uid: new Date().getTime(),
        sound: this.state.sound,
      };

      const storageRef = fb.storage.ref();
      const testsRef = storageRef.child('tests');
      const test = testsRef.child(`${data.uid.toString()}`);

      test.put(data.sound).then(() => {
        console.log(`uploaded ${data.sound} to ${test}`);
      });
    }
  }

  clearRecording() {
    this.setState({
      sound: undefined,
      recordingReady: false,
    });
  }

  saveSoundFileToState(soundFile, clearP5File) {
    if (soundFile)
      this.setState(
        {
          recordingReady: true,
          sound: soundFile,
        },
        clearP5File()
      );
  }

  render() {
    const {isRecording, recordingReady} = this.state;
    return (
      <FirebaseContext.Consumer>
        {firebase => {
          return (
            <div
              css={{
                height: `100vh`,
                width: `100%`,
                display: 'flex',
                flexFlow: `column nowrap`,
                alignItems: `center`,
                paddingTop: 100,
              }}
            >
              <Visualizer />
              {isRecording &&
                <P5Wrapper
                  sketch={mic}
                  recordingReady={recordingReady}
                  saveSoundFileToState={this.saveSoundFileToState}
                  isRecording={isRecording}
                />
              }
              <div
                css={{
                  display: 'flex',
                  flexFlow: `row nowrap`,
                  justifyContent: `center`,
                  // border: '2px dashed black',
                  minWidth: 320,
                }}
              >
                <Button
                  clickHandler={this.toggleRecording}
                  text={isRecording ? `Stop` : `Record`}
                  backgroundColor={isRecording ? `#4630eb` : `#ffffff`}
                  color={isRecording ? `#ffffff` : `#4630eb`}
                />
                <Button
                  clickHandler={() => this.saveRecording(firebase)}
                  text="Save"
                  backgroundColor="#a3a1f7"
                  color="white"
                />
              </div>
              {isRecording && <h1>RECORDING</h1>}
            </div>
          );
        }}
      </FirebaseContext.Consumer>
    );
  }
}

export default App;


//colors:
//#4630eb - dark purple
// #a3a1f7 - light purple
// #00001f - black
// #ffffff
