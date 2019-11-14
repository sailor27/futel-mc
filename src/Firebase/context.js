import React from 'react';

const FirebaseContext = React.createContext(null);
// creates FirebaseContext.Provider and FirebaseContext.Consumer.
// Using React's context api to prevent multiple instantiations of Firebase class

export default FirebaseContext;
