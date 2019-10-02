/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
 
export default () => {
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

  return (
    <Image
      fluid={ data.file.childCloudinaryAsset.fluid }
      alt='What should be simple is actually pretty painful'
      sx={{
        maxWidth: '650px'
      }}
    />
  )
}
