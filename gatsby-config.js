require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'JAMstack.systems',
    description: 'Modern Web Development on the JAMstack.',
    siteUrl: 'https://JAMstack.systems',
    image: 'https://JAMstack.systems/featured-image.png',
    imageAlt: 'Multiple glass jam jars on brown wooden table',
    name: 'Vladimir Skok',
    twitter: "@iamskok",
    language: 'en'
  },
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
  ]
}
