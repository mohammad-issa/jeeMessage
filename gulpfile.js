var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('default', function() {

	gulp.src('src/*.js')
	.pipe(concat('jeeMessages.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('lib'));

});

gulp.task('sass', function() {
	return gulp.src('src/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('lib'));

});