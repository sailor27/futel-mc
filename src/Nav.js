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
        @media (max-width: 420px) {
          font-size: 1em;
          line-height: 1.5em;
          grid-template-columns: 2fr 1fr;
        }
        > * {
          color: white;
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
        <Link to="/">
          <Logo />
        </Link>

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
          padding: 0;
          margin: 0;
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
              margin: 5px;
              :hover {
                color: ${colors.lighterPurple};
              }
            }
          }
        `}
      >
        <li>
          <Link to={ROUTES.ABOUT}>About</Link>
        </li>
        <li>
          <Link to={ROUTES.HOW_TO}>How to</Link>
        </li>
        <li>
          <Link to="/">Record</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
