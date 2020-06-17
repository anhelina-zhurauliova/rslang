const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isDev = process.env.NODE_ENV === 'development';
const isProduction = !isDev;
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: isProduction ? 'none' : 'source-map',
  watch: !isProduction,
  mode: 'development',
  entry: ['./src/index.js', './src/sass/style.scss'],
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.pug',
      minify: fix,
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/assets/img',
        to: './assets/img',
      },
    ]),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
