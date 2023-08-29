const router = require('express').Router();
const { userController } = require('../controllers');
const { loginMiddleware } = require('../middlewares');

router.post('/login', loginMiddleware.authenticateUser, userController.postLogin);

module.exports = router;