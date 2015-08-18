var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('style', function () {
    return gulp.src('./less/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['style']);

gulp.task('watch', ['default'], function () {
    return gulp.watch('./less/**/*', ['style']);
});