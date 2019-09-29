/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ title }) => (
  <footer
    sx={{
      position: 'absolute',
      right: 0,
      bottom: 0,
      fontSize: 3,
      fontWeight: 'body',
      p: 2,
      color: 'accent',
    }}
  >
    { title }
  </footer>
)