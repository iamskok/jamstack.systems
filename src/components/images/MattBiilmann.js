import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(name: { eq: "matt-biilmann" }) {
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
      fixed={data.image.cloudinary.fixed}
      alt="Matt Biilmann"
    />
  )
}