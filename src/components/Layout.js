/** @jsx jsx */
import { useState, Fragment } from 'react'
import { jsx } from 'theme-ui'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import SEO from './SEO'

export default ({ children, title }) => {
  const [opened, setOpened] = useState(false)

  return (
    <Fragment>
      <SEO />
      <Header
        opened={ opened }
        close={ () => setOpened(!opened) }
      />

      <Body>
        <Fragment>
          { children }
        </Fragment>
      </Body>

      <Footer title={ title } />
    </Fragment>
  )
}