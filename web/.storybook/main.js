const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        "~components": path.resolve(__dirname, "src", "components"),
        "~features": path.resolve(__dirname, "src", "features"),
        "~graphql": path.resolve(__dirname, "src", "graphql"),
        "~icons": path.resolve(__dirname, "src", "icons"),
        "~theme": path.resolve(__dirname, "src", "theme"),
        "~store": path.resolve(__dirname, "src", "store"),
      },
    };
    return config;
  },
};
