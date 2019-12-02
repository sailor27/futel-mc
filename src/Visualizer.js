/** @jsx jsx */

import {jsx} from '@emotion/core';
import Logo from './img/missed-connections-no-outline.png';


const img = Logo;
function Visualizer() {
  return (
    <img
      src={img}
      alt="futel phone logo"
      css={{
        border: `3px solid #4630eb`,
        maxWidth: `80%`
      }}
    />
  );
}

export default Visualizer;
