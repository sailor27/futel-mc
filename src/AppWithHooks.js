import React, { useState, useEffect } from 'react';
import Button from './Button';

const AppWithHooks = () => {
  const [ isRecording, setIsRecording ] = useState(false);
  const [recordingReady, setRecordingReady] = useState(false);

  // executes on render
  useEffect(() => {
    // not sure what this component needs to do on render - had no componentDidUpdate before
  });

  function toggleRecording() {
    setIsRecording(!isRecording);
  }

  return (
    <>
      <Button
        clickHandler={toggleRecording}
        text={isRecording ? `Stop` : `Record`}
        backgroundColor={isRecording ? `#4630eb` : `#ffffff`}
        color={isRecording ? `#ffffff` : `#4630eb`}
      />
    </>
  );
};

export default AppWithHooks;
//https://blog.logrocket.com/practical-react-hooks-how-to-refactor-your-app-to-use-hooks-b1867e7b0a53/