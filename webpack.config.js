const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  ['@babel/polyfill', './src/js/index.js'],
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, 'dist')
  },
   devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9009
  },
  plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
