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

  generateMetaData = () => {
    const { author, date, something } = this.props.data.markdownRemark.frontmatter;
    const meta = [['author', author], ['date', date ], ['something', something]];

    return(
      meta.map(data => {
        if (!data[1]) return null;

        return(
          <MetaDataContainer key={data[0]}>
            <MetaDataKey>{data[0]}</MetaDataKey>
            <MetaDataValue>{data[1]}</MetaDataValue>
          </MetaDataContainer>
        );
      })
    );
  }
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
          <BodyMetaDataContainer>
            {this.generateMetaData()}
          </BodyMetaDataContainer>

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
        blogTitle
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
