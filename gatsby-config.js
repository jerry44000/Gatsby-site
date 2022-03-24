module.exports = {
  siteMetadata: {
    url: "https://www.yourdomain.tld",
    title: "My gatsby site",
    description: "A simple site using Bootstrap and Gatbsy",
    author: "shay",
    keywords: 'gatsby site, gatsby test site, gatsby landing page',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `features`,
        path: `${__dirname}/src/features/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projectsDone`,
        path: `${__dirname}/src/projectsDone/`,
      },
    },
  ],
};
