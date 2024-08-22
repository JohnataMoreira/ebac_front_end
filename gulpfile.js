const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function compileSass(){
    return src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(gulp.dest('./build/styles'));
}

function compileJs(){
    return src('./source/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts'));
}

function comprimeImagens(){
    return src('./source/imagens/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/imagens'));
}

exports.default = function(){
    gulp.watch('./source/styles/*scss',
        {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js',
        {ignoreInitial: false}, gulp.series(compileJs));
    gulp.watch('./source/imagens/*',
        {ignoreInitial: false}, gulp.series(comprimeImagens));
}