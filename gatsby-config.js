module.exports = {
  siteMetadata: {
    title: 'Hiamo',
    description: 'Augmented Reality experiences for historic sites and beyond.',
    author: 'Hiamo Ltd.',
    siteUrl: 'https://hiamo-staging.netlify.app/'
  },
  plugins: [
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icons/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
};
