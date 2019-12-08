/** @jsx jsx */
import React from 'react';
// import Home from './Home';
import {jsx} from '@emotion/core';
import Nav from './Nav';
import * as ROUTES from './constants/routes';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';

function App() {
  return (
    <Router>
      <div
        className="wrapper"
        css={{
          maxHeight: `100vh`,
          margin: `0 auto`,
          border: `3px solid purple`,
          display: `grid`,
          gridTemplateRows: `1fr 9fr`,
        }}
      >
        <Nav />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path="/" component={Home} />

      </div>
    </Router>
  );
};

export default App;
