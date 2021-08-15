const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
  mode: 'production',
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
    new TerserPlugin(), // Minificē JS failu, webpack plugins
    new CleanWebpackPlugin(), // Iztīra Dist folderi
    new MiniCssExtractPlugin({
      filename: '[name].css?[contenthash]',
    }), // Minificē CSS un izveido jaunu failu tam
    new HtmlWebpackPlugin({
      filename: 'footer.html',
      template: './footer.html',
    }),
  ],
};
