var express = require("express");
var router = express.Router();
const userController = require("../controller/user-controller");

const wrapAsync = fn => {
  return function(req, res, next) {
    fn(req, res, next).catch(next);
  };
};
router.get("/:id", wrapAsync(userController.getOne));
router.get("/", wrapAsync(userController.getAll));
router.post("/", wrapAsync(userController.create));
router.delete("/", wrapAsync(userController.delete));
router.put("/", wrapAsync(userController.update));

module.exports = router;
