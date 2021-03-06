// This is the webpack config used for unit tests.

var utils = require('./utils')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')

//let basePlugins = baseWebpackConfig.plugins ?   baseWebpackConfig.plugins  : []

var webpackConfig = merge(baseWebpackConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  module: {
    rules: utils.styleLoaders()
  },
  devtool: '#inline-source-map',
  resolveLoader: {
    alias: {
      // necessary to to make lang="scss" work in test when using vue-loader's ?inject option
      // see discussion at https://github.com/vuejs/vue-loader/issues/724
      'scss-loader': 'sass-loader'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/test.env')
    }),
    new webpack.ProvidePlugin({
      //Promise: 'imports-loader?this=>global!exports-loader?global.Promise!es6-promise',
      Promise: 'es6-promise-promise'
    })
  ]
})

// no need for app entry during tests
delete webpackConfig.entry

module.exports = webpackConfig
