import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from 'src/components/seo';

import {
  PostExcerptsIndexContainer, PostExcerpt, Header, ExcerptText, ReadMore,
} from './_style';

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const BlogIndex = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  const posts = edges
    .map(edge => (
        <PostExcerpt key={edge.node.fields.slug}>
          <Header>
            <Link to={edge.node.fields.slug.replace(/\/$/, "")}>{edge.node.frontmatter.title}</Link>
          </Header>
          <ExcerptText>
            <section dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
          </ExcerptText>
          <ReadMore to={edge.node.fields.slug.replace(/\/$/, "")}>Read More</ReadMore>
        </PostExcerpt>
    ));

  return(
    <React.Fragment>
      <SEO
        title="Blog"
        description="Hi, I'm Yihwan. I'm a software engineer who occasionally writes about travel, coding, and other things."
      />
      <PostExcerptsIndexContainer>
        {posts}
      </PostExcerptsIndexContainer>
    </React.Fragment>
  );
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { contentType: { eq: "blog" } } }, sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(format: HTML)
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
