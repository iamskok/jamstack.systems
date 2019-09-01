module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        contentPath: './src/decks',
        basePath: '/'
      }
    }
  ]
}
