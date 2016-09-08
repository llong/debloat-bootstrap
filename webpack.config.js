var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var purify = require('purifycss-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: 'public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css?minimize!sass')
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/bootstrap.css'),
    new purify({
      basePath: __dirname,
      paths: [
        './*.html'
      ],
      purifyOptions: {
        minify: true
      }
    })
  ]
}
