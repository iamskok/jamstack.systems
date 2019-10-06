/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

export const Split = ({ children, ...props }) => {
  const [first, ...rest] = React.Children.toArray(children)
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        textAlign: 'left'
      }}>
      <div
        sx={{
          width: '100%'
        }
      }>
        { first }
      </div>
      <div
        sx={{
          width: '100%'
        }
      }>
        { rest }
      </div>
    </div>
  )
}

export default Split