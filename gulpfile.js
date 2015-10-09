/**
 * Created by Administrator on 2015/8/25.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
//var rename = require('gulp-rename');
var karma = require('gulp-karma');



gulp.task('concatjs', function () {
    gulp.src(['src/app/app.js', 'src/app/directive.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('src/dist/js/'))
        .pipe(uglify())
        .pipe(gulp.dest('./src/dist/js/min/'))
        .pipe(rev())
        .pipe(rev.manifest())
        .pipe(gulp.dest('./src/dist/rev/'));

});
gulp.task('rev', function () {
    gulp.src(['./src/dist/rev/*.json', './src/*.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('./src/'));                     //- 替换后的文件输出的目录
});
gulp.task('combineJquery', function () {
    gulp.src(['./src/app/jqueryWithDirective.js','./vendor/jquery1.9.1.js','./src/plugin/accordin/scriptbreaker-multiple-accordion-1.js'])

        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(rename({
            basename: 'jqueryAndAngular',
            prefix: 'cob-',
            suffix: '.min',
            extname: '.js'
        }))
        .pipe(gulp.dest('./src/dist/cob/'));
});
var testFiles=[
    '../vendor/angular.min.js',//angular和mock都要包含
    '../vendor/angular-mock.js',
    '../src/app/*.js',
    '*.test.js',//测试文件也要包含
];
gulp.task('test', function() {
    // Be sure to return the stream
    return gulp.src(testFiles)
        .pipe(karma({
            configFile: 'test/karma.config.js',
            action: 'run'
        }))
        .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        });
});
gulp.task("default", ['concatjs', 'rev']);
