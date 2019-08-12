var express = require('express');
var router = express.Router();

const userController = require('../controller/user-controller');
router.get('/:id', userController.getOne)
router.get('/', userController.getAll)
router.post('/', userController.create)
router.delete('/', userController.delete)
router.put('/', userController.update)

module.exports = router;
