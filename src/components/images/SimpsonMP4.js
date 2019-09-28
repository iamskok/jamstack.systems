/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useEffect, useState } from 'react'
import Image from 'gatsby-image'
import { getFluidImageObject } from 'gatsby-transformer-cloudinary'

export default () => {
  const [fluid, setFluid] = useState(false)

  useEffect(() => {
    getFluidImageObject({
      public_id: 'gatsby-cloudinary/simpson',
      cloudName: 'iamskok',
      originalHeight:  264,
      originalWidth: 382,
      breakpoints: [382, 400],
      transformations: ['t_gif-to-mp4-transform'],
    })
    .then(result => setFluid(result))
  }, [])

  return (
    fluid ?
    <Image
      fluid={ fluid }
      sx={{
        maxWidth: 382,
        maxHeight: 264,
      }}
      alt="What should be simple is actually pretty painful"
    /> :
    <div
      sx={{
        height: '100vh',
        width: '100vw',
        maxWidth: 382,
        maxHeight: 264,
      }}
    />
  )
}
