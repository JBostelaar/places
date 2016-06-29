/* eslint-disable global-require */
const gulp = require('gulp');

gulp.task('symlink', ['babel'], () => {
	const symlink = require('gulp-symlink');

	const streams = ['client', 'server'].map(dir => (
		gulp.src(`dist/${dir}`)
			.pipe(symlink(`node_modules/${dir}`, { force: true }))
	));

	return require('merge-stream')(streams);
});
