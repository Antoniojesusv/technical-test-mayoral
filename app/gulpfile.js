const gulp = require("gulp");

gulp.task("default", function() {
  return gulp
    .src([
      "./node_modules/normalize.css/normalize.css",
      "./node_modules/bootstrap/dist/css/bootstrap.css"
    ])
    .pipe(gulp.dest("./assets"));
});
