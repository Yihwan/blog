import styled from '@emotion/styled';
import { Typography, TYPOGRAPHY_STYLE, SPACER, MEDIA_QUERIES } from 'src/styles/constants';

export const PostExcerpt = styled.article`
  margin: ${SPACER.large} 0;
  max-width: 700px;

  ${MEDIA_QUERIES.xlUp} {
    &:hover {
      div {
        ${TYPOGRAPHY_STYLE.brushStroke};
        padding-top: 20px;
        margin-top: -20px;
        padding-bottom: 15px;
        margin-bottom: -15px;

        padding-left: 75px;
        margin-left: -75px;
        padding-right: 75px;
        margin-right: -75px;
      }
    }
  }
`;

export const Header = styled.div`
  ${TYPOGRAPHY_STYLE.heading};
  display: inline-block;

`;

export const ExcerptText = styled(Typography.Body)`
  padding: ${SPACER.large} 0;
`;

export const PostExcerptsIndexContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: ${SPACER.large} ${SPACER.base};

  ${MEDIA_QUERIES.mdUp} {
    padding: ${SPACER.x2large} ${SPACER.large};
  }
`;
