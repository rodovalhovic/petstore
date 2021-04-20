"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require("node-sass") //Necessário para rodar o gulp

gulp.task('default', watch);

gulp.task('sass', compilaSass);

function compilaSass(){
    return gulp
        .src("assets/scss/**/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("assets/css"));
};

function watch(){
    gulp.watch("assets/scss/**/*.scss", compilaSass);
};