/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "resources" }) {
        childCloudinaryAsset {
          fluid {
            ...CloudinaryAssetFluid
          }
        }
      }
    }
  `)

  return (
    <Image
      fluid={ data.file.childCloudinaryAsset.fluid }
      alt='JAMstack Resources'
      sx={{
        maxWidth: '500px'
      }}
    />
  )
}
