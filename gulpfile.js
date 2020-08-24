"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass"); //Necessário para funcionar o gulp-sass.

gulp.task('sass', compilaSass);

function compilaSass() {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass()) //Converte Sass para CSS com gulp-sass
        .pipe(gulp.dest("src/css"));
}

function watch() {
    gulp.watch("src/scss/**/*.scss", compilaSass);
}