/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

export default ({ children }) => (
  <Styled.h2
    sx={{
      color: 'primary',
      fontWeight: 'display'
    }}
  >
    { children }
  </Styled.h2>
)
