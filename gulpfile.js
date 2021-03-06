// dependency
var path = require("path");
var rm = require('rimraf')
var chalk = require('chalk')
// gulp & gulp plugin
var gulp = require("gulp");
var babel = require("gulp-babel");
var minify = require("gulp-minify-css");
var uglify = require('gulp-uglify');
// var gulp = require('gulp-util');

var babelPresets = [
    "react",
    "env",
]

gulp.task("clean", function (cb) {
    // spinner.start()
    rm(path.join(__dirname, './build'), err => {
        if (err) {
            cb(err)
        }
        cb()
    })
});
gulp.task("copy", function () {
    return gulp
        .src([
            './src/static/*',
        ])
        .pipe(gulp.dest('build/static'))
});
gulp.task("css", function () {
    return gulp
        .src([
            './src/*.css',
        ])
        .pipe(minify())
        .pipe(gulp.dest('build'))
});
gulp.task("js", function () {
    return gulp
        .src([
            './src/*.js',
        ])
        .pipe(
            babel({
              presets: babelPresets,
            })
          )
        .pipe(uglify())
        .pipe(gulp.dest('build'))
});


gulp.task("build", gulp.series('clean', gulp.parallel('copy', 'css', 'js')));