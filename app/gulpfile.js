const gulp = require("gulp");

gulp.task("css", function() {
  return gulp
    .src([
      "./node_modules/normalize.css/normalize.css",
      "./node_modules/bootstrap/dist/css/bootstrap.css"
    ])
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("javascript", () => {
  return gulp
    .src(["./node_modules/jquery/dist/jquery.min.js", "./controllers/main.js"])
    .pipe(gulp.dest("./assets/js"));
});

gulp.task("default", gulp.series("css", "javascript"));
