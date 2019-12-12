/** @jsx jsx */

import { jsx } from '@emotion/core';

function Photo({img, alt}) {
  return (
    <div>
      <img
        src={img}
        alt={alt}
      />
    </div>
  );
}

export default Photo;
