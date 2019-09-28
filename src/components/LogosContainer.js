/** @jsx jsx */
import { jsx } from 'theme-ui'

export default ({ children }) => (
  <div
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    { children }
  </div>
)