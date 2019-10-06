/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
 
export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "monolithic-architecture" }) {
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
      alt="Monolithic Architectures"
      sx={{
        maxWidth: '650px'
      }}
    />
  )
}