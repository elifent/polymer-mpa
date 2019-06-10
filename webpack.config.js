const path = require("path");

module.exports = {
  mode: "development",
  
  entry: {
    home: "./src/home/home.js",
    about: "./src/about/about.js",
    contact: "./src/contact/contact.js",
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/dist/'
  }
};
