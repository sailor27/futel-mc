/** @jsx jsx */
import {jsx} from '@emotion/core';
import Nav from './Nav';
import * as ROUTES from './constants/routes';
import {HashRouter as Router, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import HowTo from './HowTo';
import Shapes from './Shapes';

function App() {
  return (
    <Router basename="/">
      <div
        className="wrapper"
        css={{
          maxHeight: `100vh`,
          maxWidth: `100vw`,
          margin: `0`,
          display: `grid`,
          gridTemplateRows: `1fr 9fr`,
        }}
      >
        <Nav />
        <Shapes />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path={ROUTES.HOW_TO} component={HowTo} />
      </div>
    </Router>
  );
}

export default App;
