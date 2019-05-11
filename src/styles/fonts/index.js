import { css } from '@emotion/core';
import CharterRegular from 'src/fonts/charter/Charter-Regular.woff';
import CharterItalic from 'src/fonts/charter/Charter-Italic.woff';
import CharterBoldItalic from 'src/fonts/charter/Charter-BoldItalic.woff';
import CooperHewittBold from 'src/fonts/cooperHewitt/CooperHewitt-Bold.woff';
import CooperHewittBoldItalic from 'src/fonts/cooperHewitt/CooperHewitt-BoldItalic.woff';
import CooperHewittHeavyItalic from 'src/fonts/cooperHewitt/CooperHewitt-HeavyItalic.woff';

export default css`
  @font-face {
    font-family: 'Charter';
    src: url(${CharterRegular});
  }
  @font-face {
    font-family: "CooperHewitt";
    src: url(${CooperHewittBold});
  }
  @font-face {
    font-family: "CooperHewittHeavyItalic";
    src: url(${CooperHewittHeavyItalic});
  }
  @font-face {
    font-family: "CooperHewittBoldItalic";
    src: url(${CooperHewittBoldItalic});
  }
  @font-face {
    font-family: "CharterItalic";
    src: url(${CharterItalic});
  }
  @font-face {
    font-family: "CharterBoldItalic";
    src: url(${CharterBoldItalic});
  }

`;
