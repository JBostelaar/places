/* eslint-disable global-require,strict */

'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const c = gutil.colors;

gulp.task('babel', () => {
	const babel = require('gulp-babel');
	const del = require('del');
	const src = 'src/**/*.{js,jsx}';

	const run = e => {
		let runSrc = src;

		if (e) {
			runSrc = e.path.replace(`${process.cwd()}/`, '');

			if (e.type === 'deleted') {
				return del(runSrc.replace(/^src/, 'dist/assets'));
			}

			gutil.log(`${c.cyan('babel')}: ${c.yellow(runSrc)} ${e.type}, converting`);
		} else {
			gutil.log(`${c.cyan('babel')}: converting`);
		}

		return gulp.src(runSrc, { base: 'src' })
			.pipe(babel())
			.on('error', function handleError(err) {
				gutil.log(`${c.cyan('babel')}: ${c.red('an error occured')}`);
				console.error(err.stack);
				this.emit('end');
			})
			.pipe(gulp.dest('dist'));
	};

	if (gutil.env.dev) {
		gutil.log(`${c.cyan('babel')}: watching`);
		gulp.watch(src, run);
	}

	return run();
});
