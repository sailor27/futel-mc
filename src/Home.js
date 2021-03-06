/** @jsx jsx */
import {useState} from 'react';
import P5Wrapper from 'react-p5-wrapper';
import {colors} from './constants/colors';
import {mic} from './p5';
import {jsx} from '@emotion/core';
import {FirebaseContext} from './Firebase';
import Button from './Button';

function Home() {
  const [isRecording, setIsRecording] = useState(false);
  const [soundFile, setSoundFile] = useState(undefined);

  function toggleRecording() {
    setIsRecording(!isRecording);
    setSoundFile(undefined);
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
        soundFile
      };

      const storageRef = fb.storage.ref();
      const messagesRef = storageRef.child('messages'); // create messages dir in fb
      const message = messagesRef.child(`${data.uid.toString()}`); // create item in messages dir

      message.put(data.soundFile).then(() => {
        console.log(`uploaded ${data.soundFile} to futel ${message}s directory`);
      });
    }
  }

  return (
    <FirebaseContext.Consumer>
      {firebase => (
        <div
          css={{
            display: 'flex',
            flexFlow: `column nowrap`,
            alignItems: `center`,
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
              backgroundColor={isRecording ? colors.darkPurple : `#ffffff`}
              color={isRecording ? `#ffffff` : colors.darkPurple}
            />
            <Button
              clickHandler={() => saveToFirebase(firebase)}
              text="Save"
              color="#ffffff"
              backgroundColor={colors.darkPurple}
            />
          </div>
        </div>
      )}
    </FirebaseContext.Consumer>
  );
}

export default Home;
