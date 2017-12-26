var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
  console.log('hooray you completed the task');
});

gulp.task('html', function () {
  browserSync.reload();
});

gulp.task('styles', function () {
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function () {

  browserSync.init({
    notify: false,
    server: {
      baseDir: 'app'
    },
  });

  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('cssInject');
  });
});

gulp.task('cssInject', ['styles'], function () {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
