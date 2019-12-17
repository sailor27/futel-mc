/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { ReactComponent as PhoneSvg } from './img/purple-phone.svg';
import { colors } from './constants/colors';

export const Svg = ({
         fill = colors.lightPurple,
         className = '',
         viewBox = '0 0 32 32',
       }) => (
         <PhoneSvg
           css={css`
            {
              min-width: 400px;
            }
           `}
         />
       );

export default Svg;



