const router = require('express').Router();
const { userController } = require('../controllers');
const { loginMiddleware, userMiddlewares } = require('../middlewares');

router.post('/login', loginMiddleware.authenticateUser, userController.postLogin);
router.post('/user', userMiddlewares.validateFormatEmail, userMiddlewares
  .validateDisplayName, userMiddlewares
  .validatePassword, userMiddlewares
  .validateEmail, userController.postUser);

module.exports = router;