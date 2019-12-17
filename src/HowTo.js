/** @jsx jsx */
import WebInstructions from './WebInstructions';
import * as RecordImg from './img/record.png';
// import Shapes from './Shapes';
import {jsx, css} from '@emotion/core';

function HowTo() {
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
          }
          .content {
            flex-basis: 550px;
          }
          .image {
            @media (max-width: 420px) {
              display: none;
            }
            > img {
              max-width: 300px;
              max-height: 300px;
            }
          }
        }
      `}
    >
      <h1>How to Make a Missed Connection</h1>
      {/* <Shapes/> */}
      <div
        className="row"
        css={{
          flexFlow: `row wrap`
        }}
      >
        <p>
          Consider your neighbors, your co-commuters, and your fellow
          passers-by. Is there something you want to say?
        </p>
      </div>
      <div className="row">
        <div className="content">
          <WebInstructions />
        </div>

        <div className="image" css={{marginRight: '30px'}}>
          <img src={RecordImg} alt="recording interface" />
        </div>
      </div>
      <div className="row" css={{flexFlow: 'row wrap'}}>
        <div className="content" css={{marginRight: '30px'}}>
          {/* {content2} */}
        </div>

        <div className="image">
          {/* <img alt="recording interface" src={SaveImg} /> */}
        </div>
      </div>
    </div>
  );
}

export default HowTo;
