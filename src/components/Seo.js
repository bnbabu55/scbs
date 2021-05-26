import React from "react"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetadata"

const Seo = ({ pageMeta }) => {
  const { siteUrl } = useSiteMetadata()
  const { title, description } = pageMeta

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <title>{title}</title>
      <base target="_blank" href={siteUrl} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <link rel="canonical" href={siteUrl} />
    </Helmet>
  )
}

export default Seo
