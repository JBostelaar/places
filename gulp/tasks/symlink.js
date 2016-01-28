'use strict';

const gulp = require('gulp');

/**
 * Symlink app into node_modules
 */
gulp.task('symlink', [ 'babel' ], () => {
	const symlink = require('gulp-symlink');
	const mergeStream = require('merge-stream');
		
	return mergeStream(gulp.src('./dist')
		.pipe(symlink('node_modules/app', { force: true })));
});