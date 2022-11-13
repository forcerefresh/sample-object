// This file contains configuration for production build
const path = require("path");
const WebpackStrip = require("strip-loader");

const MODULE_FILE_NAME_APP = "sample-object-app.js";

// Configuration for object build used in Web Slider App
module.exports = {
  entry: path.resolve(__dirname, "index-app.ts"),
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: WebpackStrip.loader(
          // "logger.object.fatal", // this should be visible in prod
          // "logger.object.error", // this should be visible in prod
          "logger.object.trace",
          "logger.object.debug",
          "logger.object.info",
          "logger.object.notice",
          "logger.object.warn",
          "logger.object.add",
          "logger.object.flush"
        ),
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },

  output: {
    filename: MODULE_FILE_NAME_APP,
  },
};
