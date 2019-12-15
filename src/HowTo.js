/** @jsx jsx */
import {ABOUT_CONTENT} from './constants/content';
import ContentPage from './ContentPage';
import * as TreeImg from './img/wishing_tree.jpeg';
import * as PhoneImg from './img/futel_phone_clinton.jpeg';
import {jsx} from '@emotion/core';

function HowTo() {
  return (
    <ContentPage
      title="About Futel Missed Connections"
      img1={PhoneImg}
      img2={TreeImg}
      alt1="futel phone"
      alt2="wishing tree"
      content1={ABOUT_CONTENT}
      content2={ABOUT_CONTENT}
    />
  );
}

export default HowTo;
