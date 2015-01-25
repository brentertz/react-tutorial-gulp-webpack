'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var handleError = require('../util/handle-error');

module.exports = function(config) {
  gulp.task('styles', function() {
    var production = config.get('env') === 'production';
    var minify = production;
    var useSourceMaps = !production;

    return gulp.src(config.get('paths.client.src.styles.main'))
      .pipe(gulpif(useSourceMaps, sourcemaps.init()))
      .pipe(less().on('error', handleError))
      .pipe(autoprefixer('last 1 version'))
      .pipe(gulpif(minify, csso()))
      .pipe(gulpif(useSourceMaps, sourcemaps.write()))
      .pipe(gulp.dest(config.get('paths.client.build.styles')));
  });
};
