var gulp = require("gulp");
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {

    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {

    gulp.watch(["src/**","src/modules/**","tests/**"]).on('change', function(e){
        console.info(e.path);
        bs.reload();

    });
});
