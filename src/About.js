/** @jsx jsx */

import {jsx} from '@emotion/core';
function About() {
  return (
    <div
      css={{
        height: `100vh`,
        width: `100%`,
        display: 'flex',
        flexFlow: `column nowrap`,
        alignItems: `center`,
        paddingTop: 100,
      }}
    >
      <p>
        Retrofitting the format popular on Craigslist for a public telephone,
        Futel Missed Connections will invite passersby to record short,
        anonymous audio messages and listen and reply to messages recorded on
        the NE MLK Futel phone. Missed connections are a way to archive the way we
        encounter each other in public space, and to explore unfulfilled
        potentials. In gathering recordings of what could-have-been, Futel
        Missed Connections will superimpose a collective re-imagination onto the
        neighborhood, revealing the dreams and observations of those who
        co-occupy the space, and creating an opportunity to connect.
      </p>
    </div>
  );
}

export default About;
