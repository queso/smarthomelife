module.exports = {
  siteMetadata: {
    title: `The Smart Home Life`,
    name: `Josh & Brayden Owens`,
    siteUrl: `https://thesmarthome.life`,
    description: `We talk about all things smart home, mainly focused on Apple HomeKit`,
    hero: {
      heading: `Join us on this smart home journey.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/smarthome_life`,
      },
      {
        name: `github`,
        url: `https://github.com/joshowens`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/thesmarthomelife`,
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
  ],
};
