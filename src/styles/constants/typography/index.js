import { css } from '@emotion/core';
import styled from '@emotion/styled';

import BrushStroke from 'content/assets/brush-stroke-black.png';

import COLORS from '../colors';
import MEDIA_QUERIES from '../mediaQueries';

const FONT_SIZE = {
  displaySmall: '2.5rem',
  displayLarge: '4rem',

  headingSmall: '2rem',
  headingLarge: '2.5rem',

  titleSmall: '1.3em',
  titleLarge: '1.5rem',

  bodySmall: '1.125rem',
  bodyLarge: '1.25rem',

  captionSmall: '0.75rem',
  captionLarge: '1rem',
};

const FONT_FAMILY = {
  monospace: 'Monaco, monospace',
  system: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  serif: 'Charter, Georgia, serif',
  sansSerif: 'CooperHewitt, sans-serif',
  cooperHewittHeavyItalic: 'CooperHewittHeavyItalic, sans-serif',
  cooperHewittBoldItalic: 'CooperHewittBoldItalic, sans-serif',
  charterItalic: 'CharterItalic, Georgia, serif',
}

const displayStyle = css`
  font-size: ${FONT_SIZE.displaySmall};
  font-family: ${FONT_FAMILY.cooperHewittHeavyItalic};
  color: ${COLORS.blogBlack};
  letter-spacing: .003em;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.displayLarge};
  }
`;

const headingStyle = css`
  font-size: ${FONT_SIZE.headingSmall};
  line-height: 1.35;
  letter-spacing: 0.01em;
  font-family: ${FONT_FAMILY.cooperHewittHeavyItalic};
  color: ${COLORS.blogBlack};

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.headingLarge};
    line-height: 1.5;
  }
`;

const titleStyle = css`
  font-size: ${FONT_SIZE.titleSmall};
  font-family: ${FONT_FAMILY.cooperHewittBoldItalic};
  line-height: 1.2;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.titleLarge};
    line-height: 1.33;
  }
`;

const captionStyle = css`
  font-size: ${FONT_SIZE.captionSmall};
  font-family: ${FONT_FAMILY.charterItalic};
  color: ${COLORS.blogBlack};
  letter-spacing: 0.05em;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.captionLarge};
  }
`;

const bodyStyle = css`
  font-size: ${FONT_SIZE.bodySmall};
  font-family: ${FONT_FAMILY.serif};
  color: ${COLORS.blogBlack};
  line-height: 1.5;
  letter-spacing: .003em;

  ${MEDIA_QUERIES.mdUp} {
    font-size: ${FONT_SIZE.bodyLarge};
  }
`;


const brushStrokeStyle = css`
  background-image: url(${BrushStroke});
  color: ${COLORS.blogBlack};
  opacity: 0;
  background-repeat: no-repeat;
  background-size: 100% 95%;

  animation: drawBrushStroke 0.75s;
  animation-fill-mode: forwards;

  @keyframes drawBrushStroke {
  	from {
      color: ${COLORS.blogBlack};
      clip-path: inset(0 118% 0 0);
      opacity: 0;
    }
  	to {
      color: ${COLORS.white};
      clip-path: inset(0 0 0 0);
      opacity: 0.84;
    }
  }
`;

const Display = styled.h1(displayStyle);
const Heading = styled.h2(headingStyle);
const Title = styled.h3(titleStyle);
const Body = styled.p(bodyStyle);
const Caption = styled.p(captionStyle);

export const style = {
  heading: headingStyle,
  body: bodyStyle,
  caption: captionStyle,
  brushStroke: brushStrokeStyle,
};

const Typography = {
  FONT_FAMILY,
  FONT_SIZE,
  Display,
  Heading,
  Title,
  Body,
  Caption,
};

export default Typography;
