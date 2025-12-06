const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Mario Saul - It's-a me!",
    siteUrl: "https://mariosaul.com",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-P5D1XZNWHR"],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mario Saul - It's-a me!",
        short_name: "Mario Saul",
        start_url: "/",
        background_color: "#3fbeff",
        theme_color: "#3fbeff",
        display: "standalone",
        icon: "src/images/mario-stand.png",
      },
    },
    `gatsby-plugin-offline`,
  ],
}
