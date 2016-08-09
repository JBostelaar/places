/* eslint-disable global-require */
const gulp = require('gulp');
const gutil = require('gulp-util');
const c = gutil.colors;

function run(src) {
	const sourcemaps = require('gulp-sourcemaps');

	gutil.log(`${c.cyan('styles')}: compiling`);
	return gulp.src(src)
		.pipe(sourcemaps.init())
		.pipe(require('gulp-sass')())
		.on('error', function handleError(err) {
			gutil.log(`${c.cyan('styles')}: ${c.red('an error occured')}`);
			console.error(err.message);
			this.emit('end');
		})
		.pipe(require('gulp-autoprefixer')({
			browsers: ['last 2 versions'],
		}))
		.pipe(gutil.env.dev ? gutil.noop() : require('gulp-cssnano')({
			discardUnused: { fontFace: false },
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist/public/assets/css'))
		.on('finish', () => {
			gutil.log(`${c.cyan('styles')}: done`);
		});
}

gulp.task('styles', () => {
	const src = 'src/app/styles/*.scss';
	if (gutil.env.dev) {
		gutil.log(`${c.cyan('styles')}: watching`);
		gulp.watch([
			'src/app/styles/*.scss',
			'src/app/styles/**/*.scss',
		], () => run(src));
	}
	return run(src);
});
