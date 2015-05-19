var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
    SCSS: '../client/scss/*.scss',
    CSS: '../client/css'
};

gulp.task('sass', function () {
    gulp.src(path.SCSS)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(path.CSS));
});

gulp.task('watch', function(){
    gulp.watch(path.SCSS, ['sass']);
});

gulp.task('default', ['watch']);