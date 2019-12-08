import React from 'react';
// import Home from './Home';
import Nav from './Nav';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <Router>
      <Nav/>
      <Route exact path={ROUTES.ABOUT} component={About} />
      <Route exact path="/" component={Home} />
    </Router>
  );
};

export default App;
