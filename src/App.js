import React from 'react';
import  { FirebaseContext } from './Firebase';


const App = () => (
  <FirebaseContext.Consumer>
   {firebase => {
      firebase.db.collection('users').doc('NLi76ZESLb5ZVcUfqflw')
      .delete()
      .then(() => console.log('deleted'))
      .catch((err) => console.log(err))

     return <div>
       <input></input>
     </div>
     
   }}
</FirebaseContext.Consumer>
);
export default App;