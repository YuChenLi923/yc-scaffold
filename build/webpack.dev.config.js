const webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      { entry } = require('../config/entry'),
      merge = require('webpack-merge'),
      htmlWebpackPluginConfg = require('../config/html-webpack-plugin.config').dev,
      baseWebpackConfig = require('./webpack.base.config');
Object.keys(entry).forEach((key) => {
  entry[key] = [entry[key], 'webpack-hot-middleware/client', 'webpack/hot/dev-server'];
});
module.exports = merge(baseWebpackConfig, {
  entry,
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'Node_ENV': true
      }
    }),
    new HtmlWebpackPlugin(htmlWebpackPluginConfg),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
