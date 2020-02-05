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
    
    </Helmet>
  )
}

export default SiteMetadata;