/** @jsx jsx */
import {Link} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {jsx, css} from '@emotion/core';

function Nav() {
  return (
    <div
      css={{
        background: `pink`,
        display: `grid`,
        gridTemplateColumns: `1fr 1fr`,
        // gridGap: `20px`
      }}
    >
      <div
        css={{
          border: `2px dashed black`,
          background: `blue`,
        }}
      >
        <p>FUTEL</p>
        <p>missed connections</p>
      </div>

      <ul
        css={css`
          & li {
            color: green
          }
          margin: 0,
          border: 2px dashed black,
          background: yellow,
          display: flex
        `}
      >
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
