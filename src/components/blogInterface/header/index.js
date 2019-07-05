import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import {
  BlogHeaderContainer,
  Greeting,
  Intro,
  Nav,
} from './style';

const Header = () => (
  <BlogHeaderContainer>
    <Greeting>
      Hi, I'm Yihwan
    </Greeting>
    <Intro>
      I'm a software engineer who occasionally writes about travel, coding, and other things.
    </Intro>
    <Nav>
      <AniLink fade to='/'>Home</AniLink>
      <a href="https://yihwan.kim" target="_blank" rel="noopener noreferrer">About</a>
    </Nav>
  </BlogHeaderContainer>
)

export default Header;
