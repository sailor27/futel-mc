/** @jsx jsx */
import {ABOUT_CONTENT} from './constants/content';
import * as TreeImg from './img/wishing_tree.jpeg';
import * as PhoneImg from './img/futel_phone_clinton.jpeg';
import {jsx, css} from '@emotion/core';

function About() {
  return (
    <div
      css={css`
         {
          margin: 30px;
          display: flex;
          flex-flow: column nowrap;
          max-width: 990px;
          justify-self: center;

          h3 {
            font-weight: 800;
          }

          .row {
            display: flex;
            flex-flow: row nowrap;
            @media (max-width: 768px) {
              flex-flow: row wrap;
            }
            margin-bottom: 30px;
          }
          .content {
            flex-basis: 550px;
            & p:first-child {
              margin: auto;
            }
          }
          .image {
            @media (max-width: 420px) {
              display: none;
            }
            > img {
              max-width: 550px;
              max-height: 550px;
            }
          }
        }
      `}
    >
      <h1>About Futel Missed Connections</h1>
      <div className="row">
        <div className="image" css={{marginRight: '30px'}}>
          <img src={PhoneImg} alt="futel phone" />
        </div>

        <div className="content">
          <h3>What?</h3>
          <p>
            <b>Missed connections </b> are short messages, posted in public,
            which explore unfulfilled potentials and create a second chance for
            people to connect.
          </p>
          <p>
            Futel Missed Connections is a public messaging service presented by
            Sailor Winkelman in collaboration with Futel for Open Signal's
            <i> Hold the Phone</i> project. Users will be able to record, listen
            to, and reply to missed connections from a public telephone.
          </p>
          <h3>When/Where?</h3>
          <p>
            The Futel Missed Connections phone interface will go live on the
            Futel phone outside Open Signal on
            <a href="https://g.page/opensignalpdx?share"> NE MLK & Grand</a> in
            August 2020.
          </p>
          <p>
            You can record your message <a href="/"> on the web </a> starting
            <i> now</i> to have it heard on the Futel phone starting in August.
          </p>
        </div>
      </div>
      <div className="row" css={{flexFlow: 'row wrap'}}>
        <div className="content" css={{marginRight: '30px'}}>
          <h3>Why?</h3>
          <p>
            Missed Connections originated in the Personals sections of local
            newspapers and were popularized online with craigslist. The
            anonymous, local format draws out the desires, dreams, and imagined
            potentials felt between people who share spaces like busses,
            sidewalks, and parks.
          </p>

          <p>
            While we exist with each other in these spaces, it is not always
            safe, practical, or possible to connect.
          </p>

          <p>
            By making missed connections on a public telephone, we superimpose a
            collective sense of what could be on the surrounding neighborhood.
            People who co-occupy the space around the Futel phone can use this
            new understanding of each other to get in touch, share resources,
            and re-imagine the local world.
          </p>

          <p>
            Futel Missed Connections was inspired by its text-based counterparts
            and by{' '}
            <a href="https://www.google.com/maps/place/The+Wishing+Tree/@45.5445637,-122.6592466,19z/data=!4m5!3m4!1s0x5495a73822599995:0x322a7a12ac77c53a!8m2!3d45.5445211!4d-122.6584831">
              The Wishing Tree on 7th Ave
            </a>
            , located only a few blocks from Open Signal, which invites
            passersby to hand write wishes on tags and hang them from a tree.{' '}
          </p>
        </div>

        <div className="image">
          <img alt="wishing tree" src={TreeImg} />
        </div>
      </div>
    </div>
  );
}

export default About;
