module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        contentPath: `${__dirname}/src/decks`,
        basePath: '/'
      }
    }
  ]
}