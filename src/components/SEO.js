import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          imageAlt
          twitter
        }
      }
    }
  `);

  const {
    title,
    description,
    siteUrl,
    image,
    imageAlt,
    twitter
  } = data.site.siteMetadata

  return (
    <Helmet>
      <title>{ title }</title>
      <link rel="canonical" href={ siteUrl } />
      <meta name="description" content={ description } />
      {image && <meta name="image" content={ image } />}

      <meta property="og:url" content={ siteUrl } />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      {image && <meta property="og:image" content={ image } />}
      {image && <meta property="og:image:alt" content={ imageAlt } />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={ twitter } />
      <meta name="twitter:title" content={ title } />
      <meta name="twitter:description" content={ description } />
      {image && <meta name="twitter:image" content={ image } />}
      {image && <meta name="twitter:image:alt" content={ imageAlt } />}
    </Helmet>
  )
}

export default SEO;