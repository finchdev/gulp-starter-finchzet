module.exports = function () {
    $.gulp.task('libsJS:dev', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js'])
            .pipe($.concat('libs.min.js'))
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.stream());
    });

    $.gulp.task('libsJS:build', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js'])
            .pipe($.concat('libs.min.js'))
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.stream());
    });

    $.gulp.task('scripts', function () {
        return $.gulp.src('dev/static/js/main.js')
            .pipe($.gulp.dest('build/js'))
            .pipe($.browserSync.stream());
    });
};