const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const DIST_PATH = path.resolve(__dirname, './dist');

module.exports = {
  entry: {
    footer: './components/Export.tsx',
  },
  output: {
    filename: '[name].js?[contenthash]',
    path: DIST_PATH,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'], // Nepieciešams lai webpack nebļauj par kļūdām ka nevar saprast faila paplašinājumu build laikā
  },
  mode: 'development',
  devServer: {
    contentBase: DIST_PATH,
    index: '/footer.html',
    port: 9000,
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
      filename: 'footer.html',
      template: './footer.html',
    }),
  ],
};
