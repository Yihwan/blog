import styled from '@emotion/styled';

import {
  Typography, MEDIA_QUERIES, SPACER, COLORS, TYPOGRAPHY_STYLE,
} from 'src/styles/constants';

export const PostHeaderContainer = styled.section`
  position: relative;
  min-height: ${({hasHeaderImage}) => hasHeaderImage ? '65vh' : '35vh'};

  ${MEDIA_QUERIES.mdUp} {
    min-height: ${({hasHeaderImage}) => hasHeaderImage ? '65vh' : '50vh'};
  }
`

export const HeaderImageContainer = styled.div`
  background-color: navy;
  min-height: 65vh;

  ${MEDIA_QUERIES.lgUp} {
    min-height: 98vh;
  }
`;

export const HeaderTitleContainer = styled.div`
  padding: 0 ${SPACER.base};
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 12%;

  ${MEDIA_QUERIES.mdUp} {
    padding: 0 ${SPACER.xlarge};
  }
`;

export const HeaderCategory = styled(Typography.Caption)`
  padding: ${SPACER.small} ${SPACER.base};
  display: inline;
  font-weight: 700;
  background-color: ${COLORS.blogBlack};
  color: ${COLORS.white};
`;

export const HeaderTitle = styled(Typography.Display)`
  line-height: 1.1;
  color: ${COLORS.blogBlack};
  max-width: 80%;

  margin-left: auto;
  margin-right: auto;
`

export const HeaderTitleWithBrushStroke = styled(Typography.Display)`
  line-height: 1.1;
  color: ${COLORS.blogBlack};
  max-width: 80%;

  ${TYPOGRAPHY_STYLE.brushStroke};
  padding-top: 25px;
  margin-top: -25px;
  padding-bottom: 25px;
  margin-bottom: -25px;

  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;
`

export const PostBodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1340px;
  margin: 0 auto;
  padding: ${SPACER.large} ${SPACER.base};
  position: relative;

  ${MEDIA_QUERIES.lgUp} {
    padding: ${SPACER.x2large} ${SPACER.base};
  }

  blockquote {
    font-family: ${Typography.FONT_FAMILY.charterItalic};
    text-align: center;
    margin-bottom: 24px;
  }

  .emphasis {
    display: inline-block;
    font-weight: 700;
  }
  .emphasis:first-letter {
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
    margin-right: 0.1em;
  }
`;

export const BodyArticleContainer = styled.div`
  ${TYPOGRAPHY_STYLE.body};
  max-width: 700px;
  margin: 0 auto;

  margin-top: ${SPACER.base};

  ${MEDIA_QUERIES.lgUp} {
    margin-top: 0;
  }

  p:not(:first-of-type) {
    margin-top: 21px;

    ${MEDIA_QUERIES.lgUp} {
      margin-top: 28px;
    }

  }
`;
