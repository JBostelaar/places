/* eslint-disable global-require */

const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const gutil = require('gulp-util');
const source = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const watchify = require('watchify');
const c = gutil.colors;


gulp.task('scripts', () => {
	const bundler = browserify('./src/client/index.js', {
		extensions: ['.jsx'],
		debug: true,
		transform: [require('babelify')],
	});

	function bundle() {
		bundler.bundle()
			.on('error', function handleError(err) { console.error(err.toString()); this.emit('end'); })
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./dist/client'));
	}

	if (gutil.env.dev) {
		watchify(bundler).on('update', () => {
			gutil.log(c.yellow('Bundling scripts ..'));
			bundle();
		});
	}

	return bundle();
});
