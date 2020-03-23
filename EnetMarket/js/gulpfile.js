/*
Node.js - JavaScript, который выполняется на сервере
npm - Node Packet Manager - менеджер пакетов Node.js
GULP (GRUNT, Webpack) - 
Все!
*/

let gulp = require('gulp');
// let concat = require('gulp-concat');
let importCss = require('gulp-import-css'),
    cleanCSS = require('gulp-clean-css'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch');

//Task - задание для GULP
gulp.task('style', function(){
    return gulp.src('css/catalog.css') // src - source - источник
            // .pipe( concat('all.css') )
            .pipe( importCss() )
            .pipe(autoprefixer({
                overrideBrowsersList: ['last 2 versions'],
                cascade: false
            }))
            .pipe( cleanCSS({compatibility: 'ie8'}) )
            .pipe( gulp.dest('css/dist') ) // pipe - pipeline - конвейер, dest - destination - назначение
});

function watchChanges() {
    gulp.watch('css/blocks/*.css', gulp.series('style'));
    gulp.watch('css/blocks/**/*.css', gulp.series('style'));
}

gulp.task('watch', watchChanges);