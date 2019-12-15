/** @jsx jsx */

import {jsx, css} from '@emotion/core';
function Button({clickHandler, text, color, backgroundColor}) {
  return (
    <div>
      <button
        onClick={clickHandler}
        css={css`
          height: 50px;
          width: 120px;

          border-radius: 5px;
          margin: 15px;
          border: 3px solid black;

          background-color: ${backgroundColor};
          font-size: 1.25em;
          font-weight: bold;
          text-transform: uppercase;
          color: ${color};

          &:hover {
            color: ${backgroundColor};
            border: 3px solid black;
            background-color: ${color};
            box-shadow: 8px 8px black;
          }

          &:focus {
            box-shadow: 8px 8px black;
          }
        `}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
