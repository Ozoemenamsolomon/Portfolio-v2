require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `Solomon Obinna Ozoemenam on the Internet`,
    description: `Solomon Obinna Ozoemenam is a 22-year-old frontend developer with a freelance background in Graphics Design, currently studying computer science in the university of Siegen.`,
    author: `Solomon Obinna Ozoemenam <ozoemenamsolomo@yahoo.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://soo-portfolio-api.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        loginData: {
          identifier: process.env.LOGIN_IDENTIFIER,
          password: process.env.LOGIN_PASSWORD, //if by chance you dirty hackers see the password from my previous commit, just not that I´ve changed it!😉
        },
        contentTypes: [`project`, `techstack`, `blog-article`],
        singleTypes: [`about`],
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
