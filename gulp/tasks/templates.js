'use strict';

const gulp        = require('gulp');
const gutil       = require('gulp-util');
const fileinclude = require('gulp-file-include');
const c           = gutil.colors;

gulp.task('templates', () => {
	gulp.src(['./src/client/templates/*.html'])
	    .pipe(fileinclude({
	      prefix: '@@',
	      basepath: '@file'
	    }))
	    .pipe(gulp.dest('./dist/client/templates'));
});