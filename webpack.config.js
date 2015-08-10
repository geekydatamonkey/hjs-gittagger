'use strict';

var getConfig = require('hjs-webpack');

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  isDev: process.env.NODE_ENV !== 'production',
  // module: {
  //   loaders: [
  //     {
  //       test: /\.scss$/,
  //       loader: 'style!css!sass'
  //     }
  //   ]
  // },
});