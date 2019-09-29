/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ children }) => (
  <main
    sx={{
      px: 3,
      py: 4,
      width: '100%',
      maxWidth: '1200px'
    }}
  >
    { children }
  </main>
)