/** @jsx jsx */
import {useState} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import {mic} from './p5';
import {jsx} from '@emotion/core';
import {FirebaseContext} from './Firebase';
import Button from './Button';

function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [soundFile, setSoundFile] = useState(undefined);

  function toggleRecording() {
    setIsRecording(!isRecording);
  }

  function handleSoundFile(soundFile, playAndResetP5) {
    if (soundFile) {
      setSoundFile(soundFile);
      playAndResetP5();
    }
  }

  function saveToFirebase(fb) {
    if (soundFile) {
      const data = {
        uid: new Date().getTime(),
        soundFile,
      };

      const storageRef = fb.storage.ref();
      const testsRef = storageRef.child('tests'); // create tests dir in fb
      const test = testsRef.child(`${data.uid.toString()}`); // create item in tests dir

      test.put(data.soundFile).then(() => {
        console.log(`uploaded ${data.soundFile} to ${test}`);
      });
    }
  }

  return (
    <FirebaseContext.Consumer>
      {firebase => (
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
          <P5Wrapper
            sketch={mic}
            recordingReady={!!soundFile}
            handleSoundFile={handleSoundFile}
            isRecording={isRecording}
          />
          <div
            css={{
              display: 'flex',
              flexFlow: `row nowrap`,
              justifyContent: `center`,
              minWidth: 320,
            }}
          >
            <Button
              clickHandler={toggleRecording}
              text={isRecording ? `Stop` : `Record`}
              backgroundColor={isRecording ? `#4630eb` : `#ffffff`}
              color={isRecording ? `#ffffff` : `#4630eb`}
            />
            <Button
              clickHandler={() => saveToFirebase(firebase)}
              text="Save"
              backgroundColor="#a3a1f7"
              color="white"
            />
          </div>
        </div>
      )}
    </FirebaseContext.Consumer>
  );
}

export default Home;
