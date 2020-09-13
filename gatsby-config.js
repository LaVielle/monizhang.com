module.exports = {
  siteMetadata: {
    title: `Moni Zhang`,
    description: `Welcome to my website!`,
    author: `Moni Zhang`,
  },
  plugins: [
    // TODO: Add analytics later
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-166931784-1',
    //     head: true,
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-eslint',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/assets/posts`,
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
        icon: `src/assets/images/favicon.png`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-theme-firebase',
      options: {
        credentials: {
          apiKey: 'AIzaSyC389zU4hK3BS8_ouEYbdJyd2Olys8-jiw',
          authDomain: 'monizhang.firebaseapp.com',
          databaseURL: 'https://monizhang.firebaseio.com',
          projectId: 'monizhang',
          storageBucket: 'monizhang.appspot.com',
          messagingSenderId: '121795341475',
          appId: '1:121795341475:web:e7d128f9d4d089cdec2316',
        },
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    `gatsby-plugin-mdx`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -50,
      },
    },
    // TODO: Add Mailchimp later
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint:
    //       'https://na.us18.list-manage.com/subscribe/post?u=4a1b1680cd9ecc75a54d622b0&amp;id=5656215446',
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
