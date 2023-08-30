const router = require('express').Router();
const { userController } = require('../controllers');
const { loginMiddleware, userMiddlewares, tokenMiddlewares } = require('../middlewares');

router.post('/login', loginMiddleware.authenticateUser, userController.postLogin);
router.post('/user', userMiddlewares.validateFormatEmail, userMiddlewares
  .validateDisplayName, userMiddlewares
  .validatePassword, userMiddlewares
  .validateEmail, userController.postUser);
router.get('/user/:id', tokenMiddlewares.authenticateToken, userController.getOneUser);
router.get('/user', tokenMiddlewares.authenticateToken, userController.getAllUsers);
module.exports = router;