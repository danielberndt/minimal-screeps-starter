const gulp = require("gulp");
const screeps = require("gulp-screeps");
require("dotenv").config();

gulp.task("deploy", () => {
  gulp.src("src/*").pipe(
    screeps({
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
      host: process.env.HOST,
      port: process.env.PORT || 21025,
      secure: false,
    })
  );
});
