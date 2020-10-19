const postcssPresetEnv = require(`postcss-preset-env`)

module.exports = () => ({
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`postcss-preset-env`)({ stage: 0 })],
      },
    },
  ],
})
