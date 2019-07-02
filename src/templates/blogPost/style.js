import styled from '@emotion/styled';

import {
  Typography, MEDIA_QUERIES, SPACER, COLORS, TYPOGRAPHY_STYLE
} from 'src/styles/constants';

export const PostHeaderContainer = styled.section`
  min-height: 50vh;
  position: relative;
`

export const HeaderImageContainer = styled.div`
  background-color: navy;
  min-height: 70vh;

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
  bottom: 10%;

  ${MEDIA_QUERIES.mdUp} {
    padding: 0 ${SPACER.xlarge};
  }
`;

export const HeaderCategory = styled(Typography.Caption)`
  border: 1px solid ${COLORS.blogBlack};
  padding: ${SPACER.xsmall} ${SPACER.base};
  display: inline;
  background-color: white;
  font-weight: 700;
`;

export const HeaderTitle = styled(Typography.Display)`
  margin-top: ${SPACER.xlarge};
  line-height: 1.1;
  color: white;
  max-width: 80%;
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
