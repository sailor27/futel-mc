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
          box-shadow: 0px 0px 0px rgba(0, 1, 31, 0.05);
          &:hover {
            color:${backgroundColor};
            background-color: ${color};
            border: 3px solid ${backgroundColor}
            box-shadow: 1px 2px 2px rgba(0, 8, 23, 4.05);
          }
        `}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
