'use strict';

const globby = require('globby');
const gulp   = require('gulp');
const gutil  = require('gulp-util');

globby.sync(__dirname + '/tasks/*.js').forEach(task => require(task));

const tasks = ['babel', 'scripts', 'styles', 'symlink'];

if(gutil.env.dev){
	tasks.push('nodemon', 'watch');
}

gulp.task('default', tasks)
