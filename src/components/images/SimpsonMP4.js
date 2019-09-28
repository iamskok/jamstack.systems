import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
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
      transformations: ['t_gif-to-mp4-transform'],
    })
    .then(result => setFluid(result))
  }, [])

  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "simpson" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  return fluid ? <Image fluid={fluid} alt="Jason" /> : <Image fluid={ data.file.childCloudinaryAsset.fluid } />
}
