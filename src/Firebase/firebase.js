import app from 'firebase/app';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_UR,
  projectId: process.env.REACT_APP_STORAGE_URL,
  storageBucket: '',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
//TODO: authentication in Firebase console to connect to FIREBASE Class: https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial

export default Firebase;
