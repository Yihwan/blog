import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { TYPOGRAPHY_STYLE, SPACER, MEDIA_QUERIES, COLORS } from 'src/styles/constants';

// TODO: Clean-up p spacing, find a better selector for 'div'.
export const PostExcerpt = styled.article`
  margin: ${SPACER.large} 0;
  max-width: 700px;

  p:not(:last-of-type), blockquote {
    margin-bottom: ${SPACER.large};
  }

  ${MEDIA_QUERIES.mdUp} {
    p:not(:last-of-type), blockquote {
      margin-bottom: ${SPACER.xlarge};
    }
  }

  a {
    color: ${COLORS.blogBlack};
  }

  ${MEDIA_QUERIES.xlUp} {
    &:hover {
      div:first-of-type {
        ${TYPOGRAPHY_STYLE.brushStroke};
        padding-top: 20px;
        margin-top: -20px;
        padding-bottom: 15px;
        margin-bottom: -15px;

        padding-left: 75px;
        margin-left: -75px;
        padding-right: 75px;
        margin-right: -75px;

        a {
          color: ${COLORS.white};
        }
      }
    }
  }
`;

export const Header = styled.div`
  ${TYPOGRAPHY_STYLE.heading};
  display: inline-block;

`;

export const ExcerptText = styled.section`
  ${TYPOGRAPHY_STYLE.body};
  padding: ${SPACER.large} 0;
`;

export const ReadMore = styled(Link)`
  ${TYPOGRAPHY_STYLE.caption};
  text-align: center;
  display: block; 
  width: 100px;
  padding: ${SPACER.base} ${SPACER.large};
  margin: ${SPACER.base} 0;

  border: 1px solid ${COLORS.darkGrey};
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
