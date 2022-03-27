import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export interface SeoProps {
  description?: string
  lang?: string
  meta?: object[]
  title: string
}

const Seo: React.FC<SeoProps> = ({ description, lang, meta, title }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            baseURL
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const url = site.siteMetadata?.baseURL
  const ogImage = `${site.siteMetadata.baseURL}/og-image.jpg`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `title`,
          content: title,
        },
        {
          name: `image`,
          content: ogImage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: "og:image",
          content: ogImage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:url`,
          content: url,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
      ].concat((meta = []))}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  description: ``,
}

Seo.propTypes = {}

export default Seo
