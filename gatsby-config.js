module.exports = {
  siteMetadata: {
    title: 'mike wheaton',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/notes`,
        name: 'notes',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-styled-components',
  ],
};
