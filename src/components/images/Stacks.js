/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "lamp-mean-jam" }) {
        cloudinary: childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={ data.image.cloudinary.fluid }
      alt='LAMP vs MEAN vs JAM stack comparison'
      sx={{
        maxWidth: '850px'
      }}
    />
  )
}