const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const cors = require("cors");

//Routers
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const userCredentialsRouter = require("./routes/user-credentials");

const app = express();

app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(passport.initialize());
require("./passport-config")(passport);

app.use("/", indexRouter);
app.use(
  "/users",
  passport.authenticate("jwt", { session: false }),
  usersRouter
);
app.use("/userCredentials", userCredentialsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

//custom Middleware for logging the each request going to the API
// app.use((req,res,next) => {
//   if (req.body) log.info(req.body);
//   if (req.params) log.info(req.params);
//   if(req.query) log.info(req.query);
//   log.info(`Received a ${req.method} request from ${req.ip} for                ${req.url}`);
// next();
// });
