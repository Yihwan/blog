import React from 'react';

import injectGlobalStyles from 'src/utils/injectGlobalStyles';

import Header from './header';

import {
  BlogInterfaceContainer,
  ContentContainer,
} from './style';

class BlogInterface extends React.Component {
  render() {
    const { children } = this.props;

    return(
      <BlogInterfaceContainer>
        {injectGlobalStyles()}
        <Header />
        <ContentContainer>
          {children}
        </ContentContainer>
      </BlogInterfaceContainer>
    );
  }
}


export default BlogInterface;
