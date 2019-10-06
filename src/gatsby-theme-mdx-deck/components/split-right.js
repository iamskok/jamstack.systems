/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const SplitRight = ({ children, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children)
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        "@media (min-width: 700px)": {
          flexDirection: 'row',
        }
      }}>
      <div
        sx={{
          width: '100%',
          textAlign: 'left',
          "@media (min-width: 700px)": {
            width: '50%'
          }
        }}
      >
        { first }
      </div>
      <div
        sx={{
          width: '100%',
          textAlign: 'left',
          "@media (min-width: 700px)": {
            width: '50%'
          }
        }}
      >
        { rest }
      </div>
    </div>
  )
}

export default SplitRight