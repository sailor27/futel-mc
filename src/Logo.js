/** @jsx jsx */

import {jsx} from '@emotion/core';
import * as LogoImg from './img/transparent-white-futel.png';
const img = LogoImg;

function Logo() {
  return (
    <img
      src={img}
      alt="futel phone logo"
      css={{
        maxWidth: `160px`,
        filter: `invert(100%)`
      }}
    />
  );
}

export default Logo;
