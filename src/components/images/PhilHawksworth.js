/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "phil-hawksworth" }) {
        cloudinary: childCloudinaryAsset {
          fixed(width: 100) {
            ...CloudinaryAssetFixed
          }
        }
      }
    }
  `)

  return (
    <Image
      fixed={ data.image.cloudinary.fixed }
      alt="Phil Hawksworth"
      sx={{
        borderRadius: 9999
      }}
    />
  )
}
