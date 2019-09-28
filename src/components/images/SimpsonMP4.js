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
      alt="What should be simple is actually pretty painful"
    /> :
    <div
      sx={{
        maxWidth: 264,
        maxHeight: 382,
      }}
    />
  )
}
