import React from 'react'
import { useColorMode } from 'theme-ui'

export default props => {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <header
      style={{
        top: '0',
        right: '0',
        position: 'absolute',
        padding: '0',
        margin: '0'
      }}
    >
      <button
        onClick={e => {
          setColorMode(colorMode === 'light' ? 'dark' : 'light')
        }}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </button>
    </header>
  )
}