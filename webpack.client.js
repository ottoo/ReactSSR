const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  context: path.resolve(__dirname, 'src', 'client'),

  // Tell webpack the root file of our application
  entry: './client.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src', 'client'),
    compress: true,
    port: 8080
  }
};

module.exports = merge(baseConfig, config);
