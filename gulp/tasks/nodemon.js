/* eslint-disable global-require */

const gulp = require('gulp');
const gutil = require('gulp-util');
const c = gutil.colors;

gulp.task('nodemon', ['babel', 'symlink'], (cb) => {
	const nodemon = require('nodemon');

	nodemon({
		ignore: 'dist/client',
		script: 'dist/server/index.js',
		watch: 'dist',
	})
	.once('start', cb)
	.on('start', () => {
		gutil.log(`${c.cyan('nodemon')}: started`);
	})
	.on('restart', (files) => {
		const dest = c.yellow(files[0].replace(`${__dirname}/`, ''));
		gutil.log(`${c.cyan('nodemon')}: ${dest} changed - restarting`);
	});
});
