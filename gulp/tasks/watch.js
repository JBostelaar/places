'use strict';

const gulp  = require('gulp');
const gutil = require('gulp-util');
const watch = require('gulp-watch');

gulp.task('watch', () => {
    gulp.watch('./src/client/styles/**/*.scss', ['styles']);
    gulp.watch('./src/client/templates/**/*.html', ['templates']);
});