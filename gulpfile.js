//导入模块
let gulp = require("gulp");
let concat = require("gulp-concat");
let cssnano = require("gulp-cssnano");
let htmlmin = require("gulp-htmlmin");
let imagemin = require("gulp-imagemin");
let rename = require("gulp-rename");
let uglify = require("gulp-uglify");
let sass = require("gulp-sass");
//发布任务
//优化js
function fnJs() {
    return gulp.src("./src/js/*.js")
        .pipe(uglify())
        .pipe(rename({ suffix: "min" }))
        .pipe(gulp.dest("./dist/js"));

}
//优化图片
function fnImg() {
    return gulp.src('./src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'));
}
// //优化css
function fnCSS() {
    return gulp.src('./src/css/*.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
}
//优化scss
function fnSass() {
    return gulp.src("./src/sass/*.scss")
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./dist/css'));
}
//复制html
//复制index.html
function fnCopyIndex() {
    return gulp.src('./index.html')
        .pipe(gulp.dest('./dist/'));
}
function fnCopyIndex2() {
    return gulp.src('./src/html/*.html')
        .pipe(gulp.dest('./dist/html'));
}
//监听 
function fnWatch() {
    gulp.watch('./src/sass/*.scss', fnSass);
    gulp.watch("./src/js/*.js", fnJs);
    gulp.watch("./index.html", fnCopyIndex);
    gulp.watch('./src/html/*.html', fnCopyIndex2);
    gulp.watch('./src/img/*', fnImg);
    gulp.watch('./src/css/*.css', fnCSS);
}

//导出任务
exports.js = fnJs;
exports.sass = fnSass;
exports.index = fnCopyIndex;
exports.index2 = fnCopyIndex2;
exports.img = fnImg;
exports.CSS = fnCSS;

exports.default = fnWatch;

