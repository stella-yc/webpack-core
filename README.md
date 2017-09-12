### Set up
1. npm init / yarn init
2. yarn add webpack --dev
3. webpack.config.js

### Build and watch scripts - allow us to use modules
4. Add "build" script to package.json -> will build bundle.js based on webpack.config.js
5. Add "watch" script to package.json -> webpack will watch files in dependency graph, update bundle.js upon changes

### Loaders
Loaders perform transformations on a single file just before it is added to the dependency graph
Any asset can be treated as part of the dependency graph
6. Add module and rules to webpack.config.js

### Plugins
Plugins - apply changes to multiple files, create bundles of CSS, minify code, etc.
Lots of plugins built by webpack + others
They use webpack lifecycle and methods to run code
Plugins are essentially classes / objects and we create new instances to be used
in our application
