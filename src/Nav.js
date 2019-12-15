/** @jsx jsx */
import {Link} from 'react-router-dom';
import Logo from './Logo';
import * as ROUTES from './constants/routes';
import {colors} from './constants/colors';
import {jsx, css} from '@emotion/core';

function Nav() {
  return (
    <div
      css={css`
        background-color: ${colors.darkPurple};
        display: grid;
        grid-template-columns: 1fr 4fr;
        box-shadow: 0px 0px 0px rgba(0, 1, 31, 0.05);
        padding: 20px;
        > * {
          color: white;
        }
        @media (max-width: 420px) {
          grid-template-columns: 2fr 1fr;
        }
      `}
    >
      <div
        css={{
          display: `flex`,
          flexFlow: `column nowrap`,
          alignItems: `center`,
          justifyContent: `center`,
        }}
      >
        <Logo />
        <h3
          css={{
            margin: 0,
            fontFamily: `house-script`,
            fontSize: `1.25em`,
            letterSpacing: `normal`,
          }}
        >
          missed connections
        </h3>
      </div>

      <ul
        css={css`
          display: flex;
          margin: 0;
          padding: 0;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-around;
          @media (max-width: 420px) {
            flex-flow: column nowrap;
            align-items: flex-start;
          }
          > li {
            a {
              text-decoration: none;
              color: white;
            }
          }
        `}
      >
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={ROUTES.HOW_TO}>How to</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
