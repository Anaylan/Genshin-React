const path = require("path");
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/bundle'),
    filename: 'index_bundle.js',
    publicPath: '/'
  }
}