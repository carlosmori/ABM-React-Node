var express = require("express");
var router = express.Router();
const userCredentialsController = require("../controller/user-credentials-controller");
const passport = require("passport");
require("../passport-config")(passport);

//middleware to hanlde errors
const wrapAsync = fn => {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
};
router.post("/", wrapAsync(userCredentialsController.createUser));
router.get("/:id", wrapAsync(userCredentialsController.getUserCredentials));
router.get("/", wrapAsync(userCredentialsController.getAllUserCredentials));
module.exports = router;
