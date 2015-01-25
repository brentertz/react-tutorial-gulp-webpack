'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

module.exports = function(config) {
  gulp.task('build', function(callback) {
    runSequence(
      ['clean', 'lint'],
      ['bundle', 'styles', 'assets', 'index'],
      callback
    );
  });
};
