import React from 'react';

import injectGlobalStyles from 'src/utils/injectGlobalStyles';

import Header from 'src/components/header';

import {
  BlogInterfaceContainer,
  ContentContainer,
} from './style';

class Layout extends React.Component {
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

export default Layout;
