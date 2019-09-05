import baseTheme from 'gatsby-theme-mdx-deck/src/gatsby-plugin-theme-ui'
// import { yellow } from '@mdx-deck/themes'

export default {
  ...baseTheme,
  initialColorMode: 'light',
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    primary: '#460069',
    text: '#111',
    background: '#d23669',
    modes: {
      dark: {
        primary: '#7c00bb',
        text: ' #fff',
        background: '#222',
      }
    }
  }
}