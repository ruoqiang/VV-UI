'use strict'

var gulp = require('gulp')
var postcss = require('gulp-postcss')
var cssmin = require('gulp-cssmin')
var salad = require('postcss-salad')(require('./salad.config.json'))
var notify = require('gulp-notify');

// function swallowError(error) {

//   // If you want details of the error in the console
//   console.log(error.toString())

//   this.emit('end')
// }

function handleErrors() {

  var args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'compile error',
    message: '<%=error.message %>'
  }).apply(this, args);

  this.emit();
}
gulp.task('compile', function () {
  return gulp.src('./src/*.css')
    .pipe(postcss([salad]))
    .on('error', handleErrors) // 防止错误退出命令行 要在任务中其他任务的后面并且在输出任务的前面
    // .pipe(cssmin())
    .pipe(gulp.dest('./lib'))
})

gulp.task('copyfont', function () {
  return gulp.src('./src/fonts/**')
    .on('error', handleErrors)
    // .pipe(cssmin())
    .pipe(gulp.dest('./lib/fonts'))
})

gulp.task('build', ['compile', 'copyfont'])
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['compile'])
})
