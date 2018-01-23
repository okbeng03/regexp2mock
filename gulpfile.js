var gulp    = require('gulp');
var mocha   = require('gulp-mocha');

// mocha test
gulp.task('test', function () {
    return gulp.src(['./test/test.js'], { read: false })
        .pipe(mocha({
            useColors: true,
            reporter: 'spec'
        }));
});

gulp.task('default', ['test']);
