import styled from '@emotion/styled';
import {
  COLORS, Typography, MEDIA_QUERIES, BREAKPOINTS, SPACER,
} from 'src/styles/constants';

export const BlogInterfaceContainer = styled.main`
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERIES.mdUp} {
    flex-direction: row;
  }
`;

export const ContentContainer = styled.section`
  width: 100%;
  ${MEDIA_QUERIES.mdUp} {
    margin-left: 21rem;
  }
`;
