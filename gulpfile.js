var gulp = require('gulp');
var cssMin = require('gulp-minify-css');
var csslint = require('gulp-csslint');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var size = require('gulp-size');
var rename = require('gulp-rename');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
              ' * <%= pkg.name %> - <%= pkg.description %>',
              ' * @author <%= pkg.author %>',
              ' * @version v<%= pkg.version %>',
              ' * @link <%= pkg.homepage %>',
              ' * @license <%= pkg.license %>',
              ' */\n\n'].join('\n');

gulp.task('css', function() {
  gulp.src('css/deleted.css')
    .pipe(size({ showFiles: true, gzip: true }))
    .pipe(cssMin())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(rename({ suffix: '.min' }))
    .pipe(size({ showFiles: true, gzip: true }))
    .pipe(gulp.dest('css'));
});

gulp.task('csslint', ['css'], function() {
  gulp.src('css/deleted.css')
    .pipe(csslint());
});

gulp.task('js', function() {
  gulp.src('js/deleted.js')
    .pipe(size({ showFiles: true, gzip: true }))
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(rename({ suffix: '.min' }))
    .pipe(size({ showFiles: true, gzip: true }))
    .pipe(gulp.dest('js'));
});

gulp.task('jshint', ['js'], function() {
  gulp.src('js/deleted.js')
    .pipe(jshint());
});

gulp.task('watch', function() {
  gulp.watch('js/deleted.js', ['js', 'jshint']);
  gulp.watch('css/deleted.css', ['css', 'csslint']);
});

gulp.task('default', ['css', 'csslint', 'js', 'jshint', 'watch']);
