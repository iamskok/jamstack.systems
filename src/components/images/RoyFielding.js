/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "roy-fielding" }) {
        cloudinary: childCloudinaryAsset {
          fixed(width: 200) {
            ...CloudinaryAssetFixed
          }
        }
      }
    }
  `)

  return (
    <Image
      fixed={ data.image.cloudinary.fixed }
      alt="Roy Fielding is the father of REST API"
      sx={{
        borderRadius: 9999
      }}
    />
  )
}
