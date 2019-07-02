import styled from '@emotion/styled';
import { Typography, COLORS, MEDIA_QUERIES, SPACER, TYPOGRAPHY_STYLE } from 'src/styles/constants';

export const BlogHeaderContainer = styled.header`
  background-color: ${COLORS.blogBlack};
  color: ${COLORS.white};
  padding: ${SPACER.large} ${SPACER.base};
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERIES.mdUp} {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 18rem;
    justify-content: flex-end;
    padding: ${SPACER.xlarge} ${SPACER.large};
  }
`;

export const Greeting = styled(Typography.Heading)`
  color: ${COLORS.white};
  line-height: unset;

  ${MEDIA_QUERIES.mdUp} {
    line-height: unset;
  }
`;

export const Intro = styled(Typography.Body)`
  color: ${COLORS.white};
  line-height: 1.33;
  padding: ${SPACER.small} 0;
`;

export const Nav = styled.nav`
  ${TYPOGRAPHY_STYLE.body};
  display: flex;
  flex-direction: column;
  padding: ${SPACER.small} 0;

  a {
    color: white;
    text-decoration: none;
    padding: ${SPACER.x2small} 0;
  }
`;
