/** @jsx jsx */

import {jsx} from '@emotion/core';
function Button({clickHandler, text, color}) {
  return (
    <div>
      <button
        onClick={clickHandler}
        css={{
          height: `50px`,
          width: `120px`,
          borderRadius: 10,
          margin: 15,
          boxShadow: `0 0 0 rgba(0, 1, 31, 0.05)`,
          border: `3px solid black`,
          backgroundColor: `${color}`,
          fontSize: `1.25em`,
          fontWeight: `bold`,
          color: 'white'
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
