var express = require("express");
var router = express.Router();
const passport = require("passport");

require("../passport-config")(passport);

//middleware to hanlde errors
function wrapAsync(fn) {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
}
const userCredentialsController = require("../controller/user-credentials-controller");
router.post("/", wrapAsync(userCredentialsController.createUser));
router.get("/:id", wrapAsync(userCredentialsController.getUserCredentials));
router.get("/", wrapAsync(userCredentialsController.getAllUserCredentials));
module.exports = router;
