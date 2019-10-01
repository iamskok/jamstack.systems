/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "fast" }) {
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
      alt='Prebuild all the markup up front'
      sx={{
        margin: '-20px auto 0',
        maxWidth: '750px'
      }}
    />
  )
}