import React from 'react';

import injectGlobalStyles from 'src/utils/injectGlobalStyles';

import {
  BlogInterfaceContainer,
} from './style';

class BlogInterface extends React.Component {
  render() {
    const { children } = this.props;

    return(
      <BlogInterfaceContainer>
        {injectGlobalStyles()}
        {children}
      </BlogInterfaceContainer>
    );
  }
}


export default BlogInterface;
