import React from 'react'
import { useColorMode } from 'theme-ui'

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header>
      <button
        onClick={e => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}