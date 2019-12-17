/** @jsx jsx */
import * as TreeImg from './img/wishing_tree.jpeg';
import * as PhoneImg from './img/futel_phone_clinton.jpeg';
import {colors} from './constants/colors';
import {ReactComponent as PhoneSvg} from './img/blue-phone.svg';
import {jsx, css} from '@emotion/core';
// import Shapes from './Shapes';

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
            text-transform: uppercase;
          }

          .row {
            display: flex;
            flex-flow: row nowrap;
            @media (max-width: 768px) {
              flex-flow: row wrap;
              justify-content: space-around;
            }
            margin-bottom: 30px;
          }
          .content {
            margin-right: 30px;
            @media (max-width: 768px) {
              margin: 0;
            }
            flex-basis: 550px;
            & p:first-of-type {
              margin: auto;
            }
          }
          .image {
            @media (max-width: 768px) {
              margin: 10px;
            }
            @media (max-width: 420px) {
              display: none;
            }
            display: flex;
            > img {
              max-width: 550px;
              max-height: 450px;
            }
          }
        }
      `}
    >
      <h1>About Futel Missed Connections</h1>
      {/* <Shapes/> */}
      <div className="row">
        <div className="content">
          <p>
            <b>Missed connections </b> are short messages, posted in public,
            which explore unfulfilled potentials and create a second chance for
            people to connect.
          </p>
          <p>
            <span css={{color: colors.darkPurple}}>
              Futel Missed Connections
            </span>{' '}
            is a public messaging service presented by Sailor Winkelman in
            collaboration with Futel for Open Signal's
            <em> Hold the Phone </em> project. Users will be able to record,
            listen to, and reply to missed connections from a public telephone.
          </p>
          <br />
          <div
            css={{
              border: `2px solid black`,
              borderRadius: `15px`,
              padding: `15px`,
            }}
          >
            <p>
              The Futel Missed Connections phone interface will go live on the
              Futel phone outside Open Signal on
              <a href="https://g.page/opensignalpdx?share">
                {' '}
                NE MLK & Grand
              </a>{' '}
              in August 2020.
            </p>
            <p css={{marginBottom: 0}}>
              You can record your message <a href="/"> on the web </a> starting
              <em> now</em> to have it heard on the Futel phone starting in
              August.
            </p>
          </div>
        </div>

        <div className="image" css={{marginLeft: '30px'}}>
          <img src={PhoneImg} alt="futel phone" />
        </div>
      </div>

      <div className="row">
        <div className="content">
          <p>
            Missed Connections started in the Personals sections of local
            newspapers and were popularized online with craigslist. The
            anonymous, local format draws out the desires, dreams, and imagined
            potentials felt between people who share spaces like buses,
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
        </div>
        <div className="image" css={{marginLeft: '30px'}}>
          <PhoneSvg css={{minWidth: `400px`}} />
        </div>
      </div>
      <div className="row" css={{flexFlow: 'row wrap'}}>
        <div className="content" css={{marginRight: '30px'}}>
          <p>
            Futel Missed Connections was inspired by its text-based counterparts
            and by
            <a href="https://www.google.com/maps/place/The+Wishing+Tree/@45.5445637,-122.6592466,19z/data=!4m5!3m4!1s0x5495a73822599995:0x322a7a12ac77c53a!8m2!3d45.5445211!4d-122.6584831">
            {' '}The Wishing Tree on 7th Ave
            </a>
            , located only a few blocks from Open Signal, which invites
            passersby to hand write wishes on tags and hang them from a tree.
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
