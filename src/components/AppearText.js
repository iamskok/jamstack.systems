/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ children }) => (
  <h2
    sx={{
      color: 'primary',
      fontWeight: 'display'
    }}
  >
    { children }
  </h2>
)
