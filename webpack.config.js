const path = require("path");                  // built-in node module to help create an absolute path
const webpack= require("webpack");

module.exports = {
  entry: "./src/index.js",                     // first file in dependency graph
  output: {
    filename: "bundle.js",                     // output file
    path: path.join(__dirname, "dist")         // create a build folder named "dist" in our root directory
  },
  module: {                    // this is where we add our LOADERS
    rules: [
      {
        test: /\.js$/,         // on a file ending with .js,
        use: "babel-loader"    // use babel-loader
      },
      {
        test: /\.css$/,        // on a matching file, use
        use: [                 // these loaders (order right to left)
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.jpeg$/,                         // You can also add options
        use: [
          {                                      // a loader can be added as an object
            loader: "url-loader",
            options: { limit: 10000 }            // with an options property
          }]
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),        // This is where we can use plugins
    new webpack.ContextReplacementPlugin()
  ]
}
