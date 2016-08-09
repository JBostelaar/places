const gulp  = require('gulp');

gulp.task('watch', () => {
	gulp.watch('./src/client/styles/**/*.scss', ['styles']);
});
