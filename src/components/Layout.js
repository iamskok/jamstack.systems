/** @jsx jsx */
import { useState, Fragment } from 'react'
import { jsx } from 'theme-ui'
import Header from './Header'

export default ({ children }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Fragment>
      <Header
        opened={ opened }
        close={ () => setOpened(!opened) }
      />
      <main
        sx={{
          px: 3,
          py: 4,
          maxWidth: '1200px'
        }}
      >
        { children }
      </main>
    </Fragment>
  )
}