'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var runSequence = require('run-sequence');

module.exports = function(config) {
  gulp.task('develop', function(callback) {
    runSequence(
      'build',
      'nodemon',
      'browser-sync',
      'watch',
      callback
    );
  });
};
