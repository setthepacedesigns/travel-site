var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function () {
  console.log('hooray you completed the task');
});

gulp.task('html', function () {
  console.log('imagine summit useful here');
});

gulp.task('styles', function () {
  console.log('imagine sass or postcss');
});

gulp.task('watch', function () {
  watch('./app/index.html', function () {
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function () {
    gulp.start('styles');
  });
});
