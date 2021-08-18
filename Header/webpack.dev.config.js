const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    header: './components/App.tsx',
  },
  output: {
    filename: '[name].js?[contenthash]',
    path: DIST_PATH,
    publicPath: 'http://localhost:9002/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'], // Nepieciešams lai webpack nebļauj par kļūdām ka nevar saprast faila paplašinājumu build laikā
  },
  mode: 'development',
  devServer: {
    contentBase: DIST_PATH,
    index: '/header.html',
    port: 9002,
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
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css?[contenthash]',
    }),
    new HtmlWebpackPlugin({
      filename: 'header.html',
      template: './header.html',
    }),
    new ModuleFederationPlugin({
      name: 'HeaderApp', // App name
      filename: 'headerRemoteEntry.js',
      exposes: {
        './Header': './components/Export.tsx',
      },
    }),
  ],
};
