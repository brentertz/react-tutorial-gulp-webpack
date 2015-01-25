'use strict';

var gulp = require('gulp');
var template = require('gulp-template');

module.exports = function(config) {
  gulp.task('index', function() {
    return gulp.src(config.get('paths.client.src.index'))
      .pipe(template({ env: config.get('env') }))
      .pipe(gulp.dest(config.get('paths.client.build.index')));
  });
};
