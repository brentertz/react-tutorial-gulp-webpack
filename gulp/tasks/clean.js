'use strict';

var gulp = require('gulp');
var del = require('del');

module.exports = function(config) {
  gulp.task('clean', function(callback) {
    del(config.get('paths.client.build.glob'), callback);
  });
};
