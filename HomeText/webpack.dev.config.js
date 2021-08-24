const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const TerserPlugin = require('terser-webpack-plugin');


const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    home: './components/App.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: DIST_PATH,
    publicPath: 'auto',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'], // Nepieciešams lai webpack nebļauj par kļūdām ka nevar saprast faila paplašinājumu build laikā
  },
  mode: 'development',
  devServer: {
    contentBase: DIST_PATH,
    index: '/home.html',
    port: 9003,
    writeToDisk: true, // Nodrošina to ka tiek izveidoti faili zem dist foldera
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        loader: 'babel-loader',
        options: {
          "presets": [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript"
          ],
          "plugins": [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread",
          ]
        }
      },
    ],
  },
  plugins: [
   // new TerserPlugin(), // Minificē JS failu, webpack plugins

    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css?[contenthash]',
    }),
    new HtmlWebpackPlugin({
      filename: 'home.html',
      template: './home.html',
    }),
    new ModuleFederationPlugin({
      name: 'HomeTextApp',
      filename: 'homeTextRemoteEntry.js',
      exposes: {
        './HomeText': './components/Export.js',
      },
    }),
  ],
};
