var express = require("express");
var router = express.Router();
const loginController = require("../controller/login-controller");

const wrapAsync = fn => {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
};
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
router.post("/login", wrapAsync(loginController.login));

module.exports = router;
