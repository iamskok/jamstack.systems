import baseTheme from 'gatsby-theme-mdx-deck/src/gatsby-plugin-theme-ui'
import { lobster } from '@mdx-deck/themes'

export default {
  ...baseTheme,
  ...lobster,
  initialColorMode: 'light',
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    text: '#222',
    background: '#fff',
    modes: {
      dark: {
        text: ' #fff',
        background: '#222',
      }
    }
  }
}