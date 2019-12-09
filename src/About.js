/** @jsx jsx */
import {ABOUT_CONTENT} from './constants/content';
// import {colors} from './constants/colors';
import {jsx} from '@emotion/core';
function About() {
  return (
    <div
      css={{
        display: 'flex',
        flexFlow: `column nowrap`,
        alignItems: `center`,
      }}
    >
      <div
        css={{
          width: `256px`
        }}
      >
        {ABOUT_CONTENT}
      </div>
    </div>
  );
}

export default About;
