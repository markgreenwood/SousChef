const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

// create an output file to extract to via:
const cssExtract = new ExtractTextPlugin('main.css');

module.exports = {
  target: 'web', 
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  devServer: {
    inline:true,
    port: 8000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    cssExtract
  ],
  module: {
    rules: [{
      test: /\.js$/,
      enforce: 'pre',
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        cacheDirectory: true
      }
    }, {
      test: /\.css$/,
      loader: cssExtract.extract({
        use: [
          'style-loader',
          'css-loader'
        ]
      })	
    }, {
      test: /\.scss$/,
      loader: cssExtract.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: ['./src/scss/partials']
          }
        }]
      })
    }, {
      test: /\.html$/,
      loader: 'html-loader'	
    }]
  }
};