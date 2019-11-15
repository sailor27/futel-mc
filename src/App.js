import React from 'react';
import  { FirebaseContext } from './Firebase';


const App = () => (
  <FirebaseContext.Consumer>
   {firebase => (<div>I have access to firebase</div>)}
</FirebaseContext.Consumer>
);
export default App;