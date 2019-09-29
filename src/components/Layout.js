/** @jsx jsx */
import { useState, Fragment } from 'react'
import { jsx } from 'theme-ui'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default ({ children, title }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Fragment>
      <Header
        opened={ opened }
        close={ () => setOpened(!opened) }
      />

      <Body>
        { children }
      </Body>

      <Footer title={ title } />
    </Fragment>
  )
}