var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


gulp.task('css', function () {
    var processors = [
        autoprefixer
    ];
    return gulp.src('*.css')
      .pipe(postcss(processors))
      .pipe(gulp.dest('../dest'));
  });