'use strict';

global.$ = {
    gulp         : require('gulp'),
    pug          : require('gulp-pug'),
    sass         : require('gulp-sass'),
    csso         : require('gulp-csso'),
    autoprefixer : require('gulp-autoprefixer'),
    sourcemaps   : require('gulp-sourcemaps'),
    browserSync  : require('browser-sync').create(),
    concat       : require('gulp-concat'),
    tinypng      : require('gulp-tinypng'),
    svgmin       : require('gulp-svgmin'),
    cheerio      : require('gulp-cheerio'),
    replace      : require('gulp-replace'),
    svgSprite    : require('gulp-svg-sprite'),
    del          : require('del'),
    rename       : require('gulp-rename'),

    path: {
        tasks: require('./gulp/path/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:dev',
        'libsJS:dev',
        'scripts',
        'img:dev',
        'svg'
    ),
));

$.gulp.task('default', $.gulp.series(
    'dev',
    $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
    'clean',
    $.gulp.parallel(
        'pug',
        'fonts',
        'styles:build',
        'libsJS:build',
        'scripts',
        'img:build',
        'svg'
    )
));