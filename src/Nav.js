/** @jsx jsx */
import {Link} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {jsx} from '@emotion/core';

function Nav() {
  return (
    <div
      css={{
        height: `30px`,
        width: `100%`,
        display: 'flex',
        flexFlow: `row nowrap`,
        border: `2px dashed palevioletred`,
      }}
    >
      <ul>
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
