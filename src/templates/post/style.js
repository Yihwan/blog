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
// TODO-YK: Investigate better way to style resets.
export const PostBodyContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1340px;
  margin: 0 auto;
  margin-bottom: ${SPACER.x2large};
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
    line-height: 1; 
  }
  .emphasis:first-letter {
    font-size: 1.5em;
    font-weight: 700;
    margin-right: 0.01em;
  }

  em {
    font-style: italic;
  }

  strong {
    font-weight: 900;
  }

  .footnotes {
    margin-top: ${SPACER.x3large};

    a {
      color: ${COLORS.blogBlack};
    }
    
    li {
      margin: ${SPACER.base} 0;
    }

    p {
      display: inline;
    }

    .footnote-backref {
      color: ${COLORS.blogBlack};
    }
  }


  sup > a {
    color: ${COLORS.blogBlack};
    font-size: 0.75em;
  }
`;

export const BodyArticleContainer = styled.div`
  ${TYPOGRAPHY_STYLE.body};
  max-width: 680px;
  margin: 0 auto;

  margin-top: ${SPACER.base};

  ${MEDIA_QUERIES.lgUp} {
    margin-top: 0;
  }

  p {
    margin-bottom: ${SPACER.large};
  }

  ${MEDIA_QUERIES.mdUp} {
    p {
      margin-bottom: ${SPACER.xlarge};
    }
  }
`;
