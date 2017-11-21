const baseWebpackConfig = require('./webpack.base.config'),
      merge = require('webpack-merge'),
      path = require('path');
delete baseWebpackConfig.plugins;
module.exports = merge(baseWebpackConfig, {
  resolve: {
    // alias: {
    // }
  }
});
