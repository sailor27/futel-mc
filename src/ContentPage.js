/** @jsx jsx */
import {jsx, css} from '@emotion/core';

function ContentPage({title, img1, img2, alt1, alt2, content1, content2}) {
  return (
    <div
      css={css`
         {
          margin: 30px;
          display: flex;
          flex-flow: column nowrap;
          max-width: 990px;
          justify-self: center;

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
      <h1>{title}</h1>
      <div className="row">
        <div className="image" css={{marginRight: '30px'}}>
          <img src={img1} alt={alt1} />
        </div>

        <div className="content">{content1}</div>
      </div>
      <div className="row" css={{flexFlow: 'row wrap'}}>
        <div className="content" css={{marginRight: '30px'}}>
          {content2}
        </div>

        <div className="image">
          <img alt={alt2} src={img2} />
        </div>
      </div>
    </div>
  );
}

export default ContentPage;

