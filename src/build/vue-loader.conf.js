'use strict';
const utils = require('./utils');
const config = require('./config');

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: config.build.productionSourceMap,
    extract: true,
  }),
  cssSourceMap: config.build.productionSourceMap,
  cacheBusting: false,
  transformToRequire: {
    video: ['app', 'poster'],
    source: 'app',
    img: 'app',
    image: 'xlink:href',
  },
};
