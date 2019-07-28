module.exports = function () {
    $.gulp.task('img:dev', function () {
       return $.gulp.src('dev/static/images/*.{png,jpg,gif}')
            .pipe($.gulp.dest('build/images'));
    });

    $.gulp.task('img:build', function () {
       return $.gulp.src('dev/static/images/*.{png,jpg,gif}')
            .pipe($.tinypng('z8MdbcD0HpBmXz6rbYlvjQHsJk0jSBSz'))
            .pipe($.gulp.dest('build/images'));
    });
};