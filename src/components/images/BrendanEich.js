/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "brendan-eich" }) {
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
      alt="JavaScript father Brendan Eich"
      sx={{
        borderRadius: 9999
      }}
    />
  )
}
