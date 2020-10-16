module.exports = {
  siteMetadata: {
    title: 'Hiamo',
    description: 'Augmented Reality experiences for historic sites and beyond.',
    author: 'Hiamo Ltd.',
    siteUrl: 'https://hiamo-staging.netlify.app/',
    siteName: 'hiamo.nz',
    yandexVerify: 'fe1146aa9fbd5338',
    msVerify: 'B5495FF3397F54309CC820FCE5B6EFC8',
    googleVerify: 'Jdrg0gP79_iVUYf9koHYt1ZmW_jIBrx6g7P4fSIoNZY',
    themeColor: '#f7f8fa'
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
    {
      // Add Google Analytics
      resolve: 'gatsby-plugin-gtag',
      // NOTE: Disable this on staging, just to avoid breaking the GA data
      options: {
        trackingId: 'UA-141741488-1',
      },
    }
  ],
};
