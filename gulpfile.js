var min_js = './min_js';
var min_css = './min_css';
var pack_js = './pack_js';
var pack_css = './pack_css';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var del = require('del');
var rev = require('gulp-rev');

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('minifyjs', function() {
    return gulp.src('./js/*.js')
        // .pipe(concat('main.js'))    		//合并所有js到main.js
        // .pipe(gulp.dest('min_js')) 	 	//输出main.js到文件夹
        .pipe(rev())				   		//添加md5戳
        .pipe(rename({suffix: '.min'}))   	//rename压缩后的文件名
        .pipe(uglify())    					//压缩
        .pipe(gulp.dest('min_js'));  		//输出
});

gulp.task('minifycss', function() {
    return gulp.src('./css/*.css')      //压缩的文件
    	.pipe(rev())					//添加md5戳
    	.pipe(rename({suffix: '.min'})) //rename压缩后的文件名
        .pipe(minifycss())  			//压缩
        .pipe(gulp.dest('min_css')) ;  	//输出
});

gulp.task('clean', function(cb) {
    del(['min_css', 'min_js'], cb)
});

gulp.task('packjs',function(){
	return gulp.src('./js/*.js')	//需要被压缩的文件
	.pipe(concat('main.js'))		//合并所有js文件并命名为main.js
	.pipe(gulp.dest('pack_js'))		//输出main.js
	.pipe(rev())					//添加md5戳
    .pipe(rename({suffix: '.min'})) //rename压缩后的文件名
    .pipe(uglify())    				//压缩
    .pipe(gulp.dest('pack_js'));  	//输出
})

gulp.task('packcss', function() {
    return gulp.src('./css/*.css')      //需要被压缩的文件
	    .pipe(concat('main.css'))		//合并所有css文件并命名为main.css
		.pipe(gulp.dest('pack_css'))	//输出main.css
    	.pipe(rev())					//添加md5戳
    	.pipe(rename({suffix: '.min'})) //rename压缩后的文件名
        .pipe(minifycss())  			//压缩
        .pipe(gulp.dest('pack_css')) ;  //输出
});

gulp.task('del_pack', function(cb) {
    del(['pack_js', 'pack_css'], cb)
});

gulp.task('async', ["browser-sync"]);

gulp.task('minify', ['clean','minifycss','minifyjs'], function() {});

gulp.task('pack',['del_pack','packjs','packcss'],function(){});

