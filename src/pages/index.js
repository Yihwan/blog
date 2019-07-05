import React from 'react';
import { graphql} from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import BlogInterface from 'src/components/blogInterface';
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
            <AniLink cover bg="#292929" duration={0.75} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</AniLink>
          </Header>
          <ExcerptText>
            <section dangerouslySetInnerHTML={{ __html: edge.node.excerpt }} />
          </ExcerptText>
          <ReadMore>
            <AniLink cover bg="#292929" duration={0.75} to={edge.node.fields.slug}>—Read More—</AniLink>
          </ReadMore>
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
