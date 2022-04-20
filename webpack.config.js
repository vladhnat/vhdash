const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['./src'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "index.js",
    publicPath: '',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  },
};
