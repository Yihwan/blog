import React from 'react';
import { graphql, Link } from 'gatsby';

import BlogInterface from 'src/components/blogInterface';
import SEO from 'src/components/seo';

import {
  PostExcerptsIndexContainer, PostExcerpt, Header, ExcerptText,
} from './_style';

const BlogIndex = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const posts = edges
    .map(edge => (
        <PostExcerpt>
          <Link to={edge.node.fields.slug}>
            <Header>{edge.node.frontmatter.title}</Header>
            <ExcerptText>
              {edge.node.excerpt}
              [...]
            </ExcerptText>
          </Link>
        </PostExcerpt>
    ));

  return(
    <BlogInterface>
      <SEO title="Blog" />
      <PostExcerptsIndexContainer>
        {posts}
      </PostExcerptsIndexContainer>
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
          excerpt(pruneLength: 10000)
          fields {
            slug
          }
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
