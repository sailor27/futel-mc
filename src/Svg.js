/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactComponent as PhoneSvg } from './img/purple-phone.svg';
import { colors } from './constants/colors';

export const Svg = ({
  fill = colors.lightPurple,
  width = "100%",
  className = "",
  viewBox = "0 0 32 32"
}) => (<PhoneSvg width={width}/>)

export default Svg;



