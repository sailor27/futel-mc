/** @jsx jsx */
import React from 'react';

import {ABOUT_CONTENT} from './constants/content';
import * as TreeImg from './img/wishing_tree.jpeg';
import * as PhoneImg from './img/futel_phone_clinton.jpeg';

// import Photo from './Photo';
// import {colors} from './constants/colors';
import {jsx, css} from '@emotion/core';

function About() {
  return (
    <div css={{ margin: `30px`, display: `flex`, flexFlow: 'column nowrap', alignItems: 'center'}}>
      <h1>About</h1>
      <div
        css={css`{
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(375px, 1fr));
          justify-content: center;
          align-items: center;
          > img {
              padding: 15px;
              max-width: 375px;
              justify-self: center;

            }
        @media (max-width: 420px) {
            > img {
              display: none;
            }
          }
          .content {
            padding: 15px;
            border: 2px dashed;
          }
        }`}
      >

      <img
        src={PhoneImg}
        alt="futel phone"
      />

      <div className="content">
        {ABOUT_CONTENT}
      </div>

      <div className="content">
        {ABOUT_CONTENT}
      </div>

      <img
        alt="wishing tree"
        src={TreeImg}
      />

    </div>
  </div>
  );
}

export default About;
