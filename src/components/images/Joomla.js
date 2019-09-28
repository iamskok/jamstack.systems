import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "joomla-logo" }) {
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
      fixed={data.image.cloudinary.fixed}
      alt="Joomla Logo"
    />
  )
}