/**
 * Created by Administrator on 2015/8/25.
 */
var gulp=require('gulp');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var rev=require('gulp-rev');
var  revCollector=require('gulp-rev-collector');
gulp.task('concatjs',function(){
   gulp.src(['src/app/app.js','src/app/directive.js'])
       .pipe(concat('main.js'))
       .pipe(gulp.dest('src/dist/js/'))
       .pipe(uglify())
       .pipe(gulp.dest('./src/dist/js/min/'))
       .pipe(rev())
       .pipe(rev.manifest())
       .pipe(gulp.dest('./src/dist/rev/'));

});
gulp.task('rev', function() {
    gulp.src(['./src/dist/rev/*.json', './src/*.html'])   //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest('./src/'));                     //- 替换后的文件输出的目录
});
gulp.task("default",['concatjs','rev']);