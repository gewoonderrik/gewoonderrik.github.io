'use strict';

var gulp = require('gulp'),
    cache = require('gulp-cached'),
    beep = require('beepbeep'),
    colors = require('colors'),
    plumber = require('gulp-plumber'),
    liveReload = require('gulp-livereload'),

    scssLint = require('gulp-scss-lint'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    cssNano = require('gulp-cssnano'),

    webpack = require('webpack-stream')

var files = {
  sass: ['assets/styles/**/*.scss'],
  js: [
    'assets/scripts/**/*.js',
    '!assets/scripts/output/*.js'
  ]
};

/**
 * Error handling
 */
var gulp_src = gulp.src;

gulp.src = function() {
  return gulp_src.apply(gulp, arguments)
    .pipe(plumber(function(error) {
      beep();
    }));
};

/**
 * Tasks
 */
gulp.task('scssLint', function() {
  return gulp.src(files.sass)
    .pipe(cache('scssLint'))
    .pipe(scssLint({
      'config': 'config/lint/scss.yml'
    }))
    .pipe(scssLint.failReporter());
});


gulp.task('sass', ['scssLint'], function() {
  return gulp.src(files.sass)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(cssNano({
      autoprefixer: {
        add: true,
        browsers: ['> 0%']
      },
      discardComments: {
        removeAll: true
      }
    }))
    .pipe(gulp.dest('assets/styles/output/'))
    .pipe(liveReload());
});

gulp.task('js', function() {
  return gulp.src('assets/scripts/main.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('assets/scripts/output/'))
    .pipe(liveReload());
});

gulp.task('default', function() {
  gulp.watch(files.sass, ['scssLint', 'sass']);
  gulp.watch(files.js, ['js']);

  liveReload.listen();
});
