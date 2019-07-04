import React from 'react';
import { Link } from 'gatsby';

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
      <Link to='/'>Home</Link>
      <a href="https://yihwan.kim" rel="noopener noreferrer">About</a>
    </Nav>
  </BlogHeaderContainer>
)

export default Header;
