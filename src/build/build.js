'use strict';
const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');
const config = require('./config');
let webpackConfig = process.env.env_config == 'dev' ? require('./webpack.dev.conf') : require('./webpack.prod.conf')
let buildNumber = 0;

const spinner = ora('building for ' + process.env.env_config + ' environment...');
spinner.start();

function build(err, stats) {
  spinner.stop();
  if (err) throw err;
  process.stdout.write(stats.toString({ colors: true, modules: false, children: false, chunks: false, chunkModules: false }) + '\n\n');
  if (stats.hasErrors()) {
    console.log(chalk.red('😭 Build failed with errors.\n'));
    process.exit(1);
  }
  buildNumber++;
  console.log(chalk.cyan('🕵  Build complete', process.env.env_config, buildNumber, '.\n'));
}

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err;
  const compiler = webpack(webpackConfig);
  if (process.env.env_config == 'prod') compiler.run(build)
  else compiler.watch({ aggregateTimeout: 300, poll: true }, build)
});