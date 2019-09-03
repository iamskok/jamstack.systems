module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        contentPath: './src/decks',
        basePath: '/',
        mdx: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `decks`,
        path: `${__dirname}/src/decks/`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/decks`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/Layout.js`),
        }
      }
    }
  ]
}
