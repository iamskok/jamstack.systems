/** @jsx jsx */
import { jsx } from 'theme-ui'
import Header from './Header'

export default ({ children }) => (
  <div sx={{ maxWidth: '80vw' }}>
    <Header />

    { children }
  </div>
)
