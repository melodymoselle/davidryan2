var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
	return gulp.src('assets/scss/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('browserSync', function () {
	browserSync.init({
		server: {
			baseDir: ''
		},
	})
})

gulp.task('watch', gulp.series(gulp.parallel('browserSync', 'sass'), function(){
	gulp.watch('assets/scss/**/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('assets/js/**/*.js', browserSync.reload);
}));
