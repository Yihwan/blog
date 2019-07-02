import { css } from '@emotion/core';
import styled from '@emotion/styled';

import BrushStroke1 from 'content/assets/brush-stroke-black-1.png';
import BrushStroke2 from 'content/assets/brush-stroke-black-2.png';
import BrushStroke3 from 'content/assets/brush-stroke-black-3.png';

import COLORS from '../colors';
import MEDIA_QUERIES from '../mediaQueries';

const FONT_SIZE = {
  displaySmall: '3rem',
  displayLarge: '4.5rem',

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
  charterBoldItalic: 'CharterBoldItalic, Georgia, serif',
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
  background-image: url(${BrushStroke3});
  background-repeat: no-repeat;
  background-size: 100% 95%;

  padding-top: 15px;
  margin-top: -15px;
  padding-bottom: 15px;
  margin-bottom: -15px;

  padding-left: 125px;
  margin-left: -125px;
  padding-right: 25px;
  margin-right: -25px;
`;

const Display = styled.h1(displayStyle);
const Heading = styled.h2(headingStyle);
const Title = styled.h3(titleStyle);
const Body = styled.p(bodyStyle);
const Caption = styled.p(captionStyle);

export const style = {
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
