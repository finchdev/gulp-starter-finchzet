module.exports = function () {
    $.gulp.task('styles:dev', function () {
        return $.gulp.src('dev/static/styles/styles.scss')
            .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.autoprefixer())
            .pipe($.sourcemaps.write())
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.stream());
    });

    $.gulp.task('styles:build', function () {
        return $.gulp.src('dev/static/styles/styles.scss')
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.autoprefixer())
            .pipe($.gulp.dest('build/css'))
            .pipe($.csso())
            .pipe($.rename('styles.min.css'))
            .pipe($.gulp.dest('build/css'))
            .pipe($.browserSync.stream());
    });
};