import React from 'react';
import { graphql } from 'gatsby';

import BlogInterfaceContainer from 'src/components/blogInterface';

import {
  PostHeaderContainer,
  HeaderImageContainer,
  HeaderTitleContainer,
  HeaderCategory,
  HeaderTitle,
  PostBodyContainer,
  BodyMetaDataContainer,
  MetaDataContainer,
  MetaDataKey,
  MetaDataValue,
  BodyArticleContainer,
} from './style';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return(
      <BlogInterfaceContainer>
        <PostHeaderContainer>
          <HeaderImageContainer />

          <HeaderTitleContainer>
            <HeaderCategory>{post.frontmatter.category}</HeaderCategory>
            <HeaderTitle>{post.frontmatter.title}</HeaderTitle>
          </HeaderTitleContainer>
        </PostHeaderContainer>

        <PostBodyContainer>
          <BodyArticleContainer>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </BodyArticleContainer>
        </PostBodyContainer>
      </BlogInterfaceContainer>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        author
        date(formatString: "D MMMM YYYY")
        tags
        category
        headerImageSrc
      }
    }
  }
`
