import styled from '@emotion/styled';
import { Typography, TYPOGRAPHY_STYLE, SPACER, COLORS, MEDIA_QUERIES } from 'src/styles/constants';

export const PostExcerpt = styled.article`
  margin: ${SPACER.large} 0;
  max-width: 700px;

  ${MEDIA_QUERIES.xlUp} {
    > a:hover {
      > h2 {
        ${TYPOGRAPHY_STYLE.brushStroke};
        color: white;
      }
    }
  }
`;

export const Header = styled(Typography.Heading)`

`;

export const ExcerptText = styled(Typography.Body)`
  padding: ${SPACER.base} 0;
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
