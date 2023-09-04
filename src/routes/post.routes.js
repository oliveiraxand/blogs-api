const router = require('express').Router();
const { postController } = require('../controllers');
const { tokenMiddlewares, postMiddlewares } = require('../middlewares');

router.post('/post', tokenMiddlewares.authenticateToken, postMiddlewares
.validateCategory, postMiddlewares
.validateFields, postController.postPost);

module.exports = router;
