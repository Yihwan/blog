import React from 'react';
import { graphql } from 'gatsby';

import BlogInterface from 'src/components/blogInterface';
import SEO from 'src/components/seo';

import {
  PostPreviewContainer, PreviewHeader, PreviewExcerpt,
} from './_style';

const BlogIndex = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = edges
    .map(edge => (
      <PostPreviewContainer>
        <PreviewHeader>{edge.node.frontmatter.title}</PreviewHeader>
        <PreviewExcerpt>{edge.node.excerpt}</PreviewExcerpt>
      </PostPreviewContainer>
    ));

  return(
    <BlogInterface>
      <SEO title="Blog" />
      {posts}
    </BlogInterface>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { contentType: { eq: "blog" } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 500)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
