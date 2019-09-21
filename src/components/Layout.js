/** @jsx jsx */
import ThemeToggle from './ThemeToggle'
import { jsx } from 'theme-ui'

export default ({ children }) => (
  <div sx={{ maxWidth: '80vw' }}>
    <ThemeToggle />

    { children }
  </div>
)
