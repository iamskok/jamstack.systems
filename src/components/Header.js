/** @jsx jsx */
import ThemeToggle from './ThemeToggle'
import { jsx } from 'theme-ui'

export default props => (
  <header sx={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
  }}>
    <nav sx={{
      display: 'flex',
      flexDirection: 'row-reverse',
      width: '100%',
      px: 2,
      py: 2,
    }}>
      <ThemeToggle />
    </nav>
  </header>
)
