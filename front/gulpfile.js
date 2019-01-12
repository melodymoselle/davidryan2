
const browsersync = require("browser-sync").create();
const gulp = require("gulp");
const sass = require("gulp-sass");

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./"
    },
    port: 3000
  });
  done();
}

// BrowserSync Reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("./assets/scss/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./assets/css/"))
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
  gulp.watch("./assets/scss/**/*", css);
  gulp.watch("./**/*.html", browserSyncReload);
}

const watch = gulp.parallel(watchFiles, browserSync);

exports.watch = watch;
