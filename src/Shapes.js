/** @jsx jsx */
import {jsx, css} from '@emotion/core';
import {ReactComponent as Triangle} from './img/triangle.svg';
import React from 'react';

function Shapes() {
  return (
    <>
      <Triangle
        css={{
          maxWidth: `450px`,
          zIndex: `-1`,
          position: `fixed`,
          top: `20px`,
          filter: `brightness(150%)`,
        }}
      />
      <Triangle
        css={css`
          @media (max-width: 420px) {
            display: none;
          }
          max-width: 380px;
          z-index: -1;
          position: fixed;
          bottom: 0;
          right: 0;
          margin: 60px;
          filter: brightness(150%);
          transform: scaleX(-1);
        `}
      />
      <Triangle
        css={css`
          @media (max-width: 768px) {
            display: none;
          }
          max-width: 300px;
          z-index: -1;
          position: fixed;
          bottom: 0;
          left: 0;
          filter: brightness(150%);
          transform: scaleX(-1);
        `}
      />
    </>
  );
}

export default Shapes;
