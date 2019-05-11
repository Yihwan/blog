const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Yihwan's Blog",
    description: "Hi, I'm Yihwan. This is my blog.",
    author: `Yihwan Kim`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-lodash',
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        content: path.join(__dirname, 'content')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `blog-dot-yihwan-dot-kim`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#212529`,
        theme_color: `#212529`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-119690274-2",
      },
    },
  ],
}