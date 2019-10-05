import React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          title
          description
          siteUrl
          image
          imageAlt
          name
          twitter
          language
        }
      }
    }
  `)

  const {
    buildTime,
    siteMetadata: {
      title,
      description,
      siteUrl,
      image,
      imageAlt,
      name,
      twitter,
      language
    }
  } = data.site

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline: title,
    inLanguage: language,
    mainEntityOfPage: siteUrl,
    description,
    name: title,
    author: {
      '@type': 'Person',
      name
    },
    creator: {
      '@type': 'Person',
      name
    },
    publisher: {
      '@type': 'Person',
      name
    },
    datePublished: '2019-09-28T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image
    },
  }

  const schemaArticle = {
    '@context': 'http://schema.org',
    '@type': 'Article',
    author: {
      '@type': 'Person',
      name
    },
    creator: {
      '@type': 'Person',
      name
    },
    publisher: {
      '@type': 'Organization',
      name,
      logo: {
        '@type': 'ImageObject',
        url: image
      },
    },
    datePublished: '2019-09-28T10:30:00+01:00',
    dateModified: buildTime,
    description,
    headline: title,
    inLanguage: language,
    url: siteUrl,
    name: title,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
    mainEntityOfPage: siteUrl
  }

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

      <script type="application/ld+json">{ JSON.stringify(schemaOrgWebPage) }</script>
      <script type="application/ld+json">{ JSON.stringify(schemaArticle) }</script>
    </Helmet>
  )
}

export default SEO