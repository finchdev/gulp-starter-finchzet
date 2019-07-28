module.exports = function () {
    $.gulp.task('pug', function () {
        return $.gulp.src('dev/pug/*.pug')
            .pipe($.pug({
                pretty: true
            }))
            .pipe($.gulp.dest('build'))
            .on('end', $.browserSync.reload);
    });
};