import baseTheme from 'gatsby-theme-mdx-deck/src/gatsby-plugin-theme-ui'
// import { yellow } from '@mdx-deck/themes'

export default {
  ...baseTheme,
  initialColorMode: 'light',
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    primary: '#bf4080',
    text: '#222',
    background: '#ffe000',
    modes: {
      dark: {
        text: ' #fff',
        background: '#222',
      }
    }
  }
}