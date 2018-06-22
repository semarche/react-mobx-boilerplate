const path = require('path');
const webpack = require('webpack');
const appPort = process.env.PORT || 9999;

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://0.0.0.0:${appPort}`,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'app.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss|css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
    ]
  },
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    port: appPort,
    host: '0.0.0.0',
    publicPath: '/',
    historyApiFallback: true,
    disableHostCheck: true
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
