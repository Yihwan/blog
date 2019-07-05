import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import SEO from 'src/components/seo';
import Layout from 'src/layouts';

import {
  PostHeaderContainer,
  HeaderTitleContainer,
  HeaderTitle,
  HeaderTitleWithBrushStroke,
  PostBodyContainer,
  BodyArticleContainer,
} from './style';

class PostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const hasHeaderImage = !!post.frontmatter.featuredImageSrc;

    return(
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <PostHeaderContainer hasHeaderImage={hasHeaderImage}>
          {hasHeaderImage && (
            <Img
              style={{position: 'static'}}
              imgStyle={{objectFit: 'cover'}}
              sizes={post.frontmatter.featuredImageSrc.childImageSharp.fluid}
            />)}

          <HeaderTitleContainer>
            {hasHeaderImage
              ?
              <HeaderTitleWithBrushStroke>
                {post.frontmatter.title}
              </HeaderTitleWithBrushStroke>
              :
              <HeaderTitle>
                {post.frontmatter.title}
              </HeaderTitle>}
          </HeaderTitleContainer>
        </PostHeaderContainer>

        <PostBodyContainer>
          <BodyArticleContainer>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </BodyArticleContainer>
        </PostBodyContainer>
      </Layout>
    );
  }
}

export default PostTemplate;

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
      html
      excerpt
      frontmatter {
        title
        author
        featuredImageSrc {
          childImageSharp{
            fluid(maxWidth: 4000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
