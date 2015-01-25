'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

module.exports = function(config) {
  gulp.task('browser-sync', function() {
    browserSync({
      proxy: 'localhost:' + config.get('port'),
      port: 3001,
      files: config.get('paths.client.build.glob')
    });
  });
};
