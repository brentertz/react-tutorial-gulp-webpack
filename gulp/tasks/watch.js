'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

module.exports = function(config) {
  gulp.task('watch', function() {
    watch(config.get('paths.client.src.index'), function() {
      gulp.start('index');
    });

    watch(config.get('paths.client.src.scripts.glob'), function() {
      gulp.start(['lint', 'bundle']);
    });

    watch(config.get('paths.client.src.styles.glob'), function() {
      gulp.start('styles');
    });
  });
};
