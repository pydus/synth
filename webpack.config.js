const webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
        output: {
          comments: false
      }
    })
  ] 
};
