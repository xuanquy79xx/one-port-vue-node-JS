'use strict';
// Template version: 1.2.6
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

module.exports = {
  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../../../views/index.ejs'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../../../public/'),
    assetsSubDirectory: 'static',

    //Title
    title: 'Khúc Xuân Quý',

    /**
     * You can set by youself according to actual condition
     * You will need to set this if you plan to deploy your site under a sub path,
     * for example GitHub pages. If you plan to deploy your site to https://foo.github.io/bar/,
     * then assetsPublicPath should be set to "/bar/".
     * In most cases please use '/' !!!
     */
    assetsPublicPath: '/', // If you are deployed on the root path, please use '/'

    /**
     * Source Maps
     */
    productionSourceMap: false,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report,
  },
};
