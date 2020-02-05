import React from "react"
import { Helmet } from "react-helmet"
import favicon from '../Images/favicon.png';



const SiteMetadata = ({ pathname, locale, title }) => {


  return (
    <Helmet defer={false} defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang={locale} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <link rel="icon" href={favicon} />
      <meta property="og:url" content={pathname} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={title} />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>

    
    </Helmet>
  )
}

export default SiteMetadata;