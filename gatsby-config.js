const { siteMetadata } = require('./site-config')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata,
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        contentPath: `${__dirname}/src/decks/`,
        basePath: '/'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        uploadFolder: 'gatsby-cloudinary',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148960582-1",
        head: false
      },
    },
    `gatsby-plugin-sitemap`
  ]
}
