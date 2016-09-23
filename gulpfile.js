'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var jade = require('gulp-jade');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var bc = 'bower_components/';

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('sass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('build.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('moveJSLibs', function () {
    gulp.src([
            bc + 'jquery/dist/jquery.min.js',
            bc + 'owl.carousel/dist/owl.carousel.min.js'
        ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('moveCSSLibs', function () {
    gulp.src([
            bc + 'owl.carousel/dist/assets/owl.carousel.min.css'
        ])
        .pipe(concat('libs.css'))
        .pipe(gulp.dest('build/css'));
});

gulp.task('moveJS', function () {
    gulp.src('js/**/*.js')
        .pipe(concat('build.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('moveImg', function () {
    gulp.src('img/**/*')
        .pipe(gulp.dest('build/img'));
});

gulp.task('moveFonts', function () {
    gulp.src('fonts/**/*')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('jade', function() {
    gulp.src('jade/**/*.jade')
        .pipe(jade({
            //pretty: true,
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('build', ['moveJSLibs', 'moveCSSLibs', 'moveJS', 'moveImg', 'moveFonts', 'sass', 'jade']);

gulp.task('watch', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('js/**/*.js', ['moveJS']);
    gulp.watch('img/**/*', ['moveImg']);
    gulp.watch('fonts/**/*', ['moveFonts']);
    gulp.watch('jade/**/*.jade', ['jade']);
});