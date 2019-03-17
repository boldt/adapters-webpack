const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist/browser']),
    new webpack.DefinePlugin({
      IS_BROWSER: true
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist/browser'),
    filename: 'app.js'
  },
  target: 'web'
};
