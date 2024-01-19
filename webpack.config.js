const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    application: './app/javascript/application.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    path: path.resolve(__dirname, 'app/assets/builds'),
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'app/javascript/react/src/components'),
      '@redux': path.resolve(__dirname, 'app/javascript/react/src/redux'),
    },
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};