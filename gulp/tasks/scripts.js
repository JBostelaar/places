'use strict';

const babel      = require('babelify');
const browserify = require('browserify');
const buffer     = require('vinyl-buffer');
const gulp       = require('gulp');
const gutil      = require('gulp-util');
const source     = require('vinyl-source-stream');
const sourcemaps = require('gulp-sourcemaps');
const watchify   = require('watchify');
const c          = gutil.colors;


gulp.task('scripts', () => {
	const bundler = browserify('./src/client/scripts/index.js', { debug: true}).transform(babel);

	if(gutil.env.dev){
		watchify(bundler);
	}

	function bundle(){
	    bundler.bundle()
			.on('error', function(err) { console.error(err); this.emit('end'); })
			.pipe(source('app.min.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest('./dist/client/scripts'));
	}
  	
	bundler.on('update', () => {
		gutil.log(c.yellow('Bundling scripts ..'));
		bundle();
    });

    bundle();
});