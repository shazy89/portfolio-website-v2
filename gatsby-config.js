require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'Portfolio Project v2',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Erdoan Shaziman's portfolio webste`,
        short_name: `Portfolio Website`,
        lang: `en`,
        start_url: `/`,
        icon: `src/images/favicon-32x32.png`,

        display: `standalone`,
      },
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Zen Old Mincho`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
