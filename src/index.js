import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Firebase, {FirebaseContext} from './Firebase';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import About from './About';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <Route exact path={ROUTES.ABOUT} component={About} />
      <Route exact path='/' component={App} />
    </Router>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
