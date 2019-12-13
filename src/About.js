/** @jsx jsx */
import {ABOUT_CONTENT} from './constants/content';
import * as TreeImg from './img/wishing_tree.jpeg';
import * as PhoneImg from './img/futel_phone_clinton.jpeg';
import {jsx, css} from '@emotion/core';

function About() {
  return (
    <div
      css={css`
         {
          margin: 30px;
          display: flex;
          flex-flow: column nowrap;
          max-width: 990px;
          justify-self: center;
          
          .row {
            display: flex;
            flex-flow: row nowrap;
            @media (max-width: 768px) {
              flex-flow: row wrap;
            }
            margin-bottom: 30px;
          }
          .content {
            font-size: 1.15em;
            font-weight: bold;
            flex-basis: 550px;
          }
          .image {
            @media (max-width: 420px) {
              display: none;
            }
            > img {
              max-width: 550px;
              max-height: 550px;
            }
          }
        }
      `}
    >
      <h1>About Futel Missed Connections</h1>
      <div className="row">
        <div className="image" css={{marginRight: '30px'}}>
          <img src={PhoneImg} alt="futel phone" />
        </div>

        <div className="content">{ABOUT_CONTENT}</div>
      </div>
      <div className="row" css={{flexFlow: 'row wrap'}}>
        <div className="content" css={{marginRight: '30px'}}>
          {ABOUT_CONTENT}
        </div>

        <div className="image">
          <img alt="wishing tree" src={TreeImg} />
        </div>
      </div>
    </div>
  );
}

export default About;
