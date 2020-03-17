/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-material-ui`, `gatsby-plugin-sass`, `gatsby-plugin-emotion`,
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-155154594-12",
    },
    },
  ] 
}


