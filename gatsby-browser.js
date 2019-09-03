import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  wrapper: ({ children }) => <>{ children }</>
}

export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={ components }>
      { element }
    </MDXProvider>
  )
}