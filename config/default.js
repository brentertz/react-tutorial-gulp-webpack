'use strict';

var path = require('path');

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  loggerOptions: 'dev',
  paths: {
    client: {
      src: {
        assets: './client/src/assets/**/*',
        index: './client/src/index.html',
        root: './client/src',
        scripts: {
          glob: './client/src/**/*.js*',
          main: './client/src/index.jsx'
        },
        styles: {
          glob: './client/src/**/*.less',
          main: './client/src/styles/index.less'
        }
      },
      build: {
        assets: './client/build/assets',
        glob: './client/build/**/*.*',
        index: './client/build',
        root: './client/build',
        scripts: './client/build',
        styles: './client/build'
      }
    },
    config: {
      root: './config'
    },
    server: {
      src: {
        root: './server/src',
        scripts: {
          main: './server/src/index.js'
        }
      }
    }
  },
  webpack: {
    debug: true,
    devtool: '#inline-source-map',
    entry: './client/src/index.jsx',
    module: {
      loaders: [
        { test: /\.jsx$/, loader: 'jsx' }
      ]
    },
    output: {
      path: path.join(__dirname, '../client/build'),
      filename: 'index.js'
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    watcher: false // NOTE: watch is a reseverd word in node-config
  }
};
