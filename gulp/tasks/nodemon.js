'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function(config) {
  gulp.task('nodemon', function() {
    nodemon({
      script: config.get('paths.server.src.scripts.main'),
      ext: 'html js',
      ignore: ['node_modules/**'],
      watch: [
        config.get('paths.config.root'),
        config.get('paths.server.src.root')
      ],
      nodeArgs: ['--debug']
    })
    .on('change', ['lint']);
  });
};
