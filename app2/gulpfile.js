var gulp = require('gulp');
var gulpConnect = require('gulp-connect');
var webpackStream = require('webpack-stream');
var named = require('vinyl-named');
var providePlugin = require('webpack-stream').webpack.ProvidePlugin;

gulp.task('server', function () {
    gulpConnect.server({
        root: 'public',
        livereload: true
    });
})

gulp.task('js', function () {
    gulp.src('./app/js/*.js')
        .pipe(named())
        .pipe(webpackStream({
            mode: 'development',
            output: {
                filename: '[name].bundle.js'
            },

            plugins: [
                new providePlugin({
                    '$': 'jquery',
                    'jQuery': 'jquery'
                })
            ],
            devtool: 'eval'
        }))
        .pipe(gulp.dest('./public'))
        .pipe(gulpConnect.reload())
})


gulp.task('html', function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./public'))
        .pipe(gulpConnect.reload())
})

gulp.task('watch', function () {
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch('./app/js/**/*.js', ['js']);
})

gulp.task('default', ['html', 'js', 'server', 'watch'])