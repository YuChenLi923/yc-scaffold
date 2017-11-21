const webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      merge = require('webpack-merge'),
      { entry }  = require('../config/entry'),
      htmlWebpackPluginConfg = require('../config/html-webpack-plugin.config').prod,
      baseWebpackConfig = require('./webpack.base.config');

// 设置编译好了的css文件路径
function setCSS(getPath) {
  return getPath('css/[name].css').replace('css/js/pages', 'css');
}

module.exports = merge(baseWebpackConfig, {
  entry,
  plugins: [
    new webpack.LoaderOptionsPlugin({ // 压缩css文件
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      },
      output: {
        comments: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: setCSS
    }),
    new HtmlWebpackPlugin(htmlWebpackPluginConfg)
  ]
});
