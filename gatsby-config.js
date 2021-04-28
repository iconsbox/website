require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `🧙`,
    siteHeadline: `IconBox`,
    siteDescription: "My personal site to add my projects and demo files",
    siteTitleAlt: `‍IconBox - World of famous icon packs`,
    siteImage: `/android-icon-192x192.png`,
    siteLanguage: "en",
    siteUrl: "https://iconbox.space",
    author: "@sayjeyhi",
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
        ],
        externalLinks: [
          {
            name: `Github`,
            url: `https://github.com/iconsbox`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-FK0DXN0V1E',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SayJeyHi`,
        short_name: `SayJeyHi blog`,
        description: `My personal site to add my projects and demo files`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: "/android-icon-36x36.png",
            sizes: "36x36",
            type: "image/png",
            density: "0.75",
          },
          {
            src: "/android-icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
            density: "1.0",
          },
          {
            src: "/android-icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
            density: "1.5",
          },
          {
            src: "/android-icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
            density: "2.0",
          },
          {
            src: "/android-icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
            density: "3.0",
          },
          {
            src: "/android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            density: "4.0",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
