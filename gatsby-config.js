module.exports = {
  siteMetadata: {
    title: `Donskelle - Frontend Developer Hamburg`,
    description: `A frontend developer in Hamburg`,
    author: `@donskelle`,
  },
  pathPrefix: '/me',
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'MUZZAK',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Donskelle Dev`,
        short_name: `Donskelle`,
        start_url: `/`,
        background_color: `#2079c7`,
        theme_color: `#2079c7`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN_READ}`,
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
  ],
}
