// declare dependencies
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var es = require('event-stream');

var bootswatchTheme = 'flatly';

// copy bower dependencies to appropriate locations
gulp.task('copy', function(cb) {
  return es.concat(
    gulp.src('bower_components/bootstrap/dist/fonts/*')
      .pipe(gulp.dest('public/fonts')),
    gulp.src('bower_components/bootswatch/'+bootswatchTheme+'/bootstrap.min.css')
      .pipe(gulp.dest('public/css')),
    // gulp.src('bower_components/bootstrap/dist/css/bootstrap.min.css')
    //   .pipe(gulp.dest('public/css')),
    gulp.src('bower_components/bootstrap/dist/js/bootstrap.min.js')
      .pipe(gulp.dest('public/js')),
    gulp.src('bower_components/jquery/dist/jquery.min.js')
      .pipe(gulp.dest('public/js')),
    gulp.src('bower_components/html5shiv/dist/html5shiv.min.js')
      .pipe(gulp.dest('public/js')),
    gulp.src('bower_components/respond/dest/respond.min.js')
      .pipe(gulp.dest('public/js'))
  );
});

// produce a concatenated, minified all css file
gulp.task('css', function(cb) {
  return gulp.src('assets/css/*.css')
    .pipe(autoprefixer('last 1 version'))
    .pipe(concat('all.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css'));
});

// produce a concatenated, uglified all js file
gulp.task('js', function(cb){
  return gulp.src('assets/js/*.js')
    .pipe(concat('all.min.js'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
});

// watch for changes
gulp.task('watch', function() {
  gulp.watch('assets/js/**', ['js']);
  gulp.watch('assets/css/**', ['css']);
});

// define the default task list
gulp.task('default', ['copy', 'css', 'js', 'watch']);
