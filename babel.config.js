// babel.config.js
const path = require("path");

const gluestackStyleResolver = require("@gluestack-style/babel-plugin-styled-resolver");
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        gluestackStyleResolver,
        {
          configThemePath: ["config", "theme"], // Specify the path of the theme object in your config file
        },
      ],
    ],
  };
};
