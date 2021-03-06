const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
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
).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {

      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/post/index.js`),
        context: {
          slug: node.fields.slug,
        },
      })
    })

    return;
  })
}


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content/blog` });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
}
