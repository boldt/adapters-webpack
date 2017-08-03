const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new CleanWebpackPlugin(['dist/node']),
    new webpack.DefinePlugin({
      IS_BROWSER: false
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist/node'),
    filename: 'app.js'
  },
  target: 'node',
  externals: [nodeExternals()]
};
