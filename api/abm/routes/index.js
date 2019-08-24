var express = require("express");
var router = express.Router();
const loginController = require("../controller/login-controller");
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});
// router.post("/login", loginController.login);

module.exports = router;
