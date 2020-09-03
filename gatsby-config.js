module.exports = {
  siteMetadata: {
    title: `Donskelle - Frontend Developer Hamburg`,
    description: `Frontend developer in Hamburg`,
    author: `@donskelle`,
  },
  pathPrefix: '/me',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'Muzzak',
        // This is field under which it's accessible
        fieldName: 'muzzak',
        // Url to query from
        url: process.env.ME_GQ_ENDPOINT,
        headers: {
          'x-api-key': process.env.ME_AWS_APIKEY,
        },
      },
    },
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
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Github',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.G_TOKEN_READ}`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-145180610-1',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /img\/svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        printRejected: true,
        purgeOnly: [`src/styles/globals.css`],
        // develop: true, // Enable while using `gatsby develop`
      },
    },
  ],
};
