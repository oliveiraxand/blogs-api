const router = require('express').Router();
const { postController } = require('../controllers');
const { tokenMiddlewares, postMiddlewares } = require('../middlewares');

router.post('/post', tokenMiddlewares.authenticateToken, postMiddlewares
.validateCategory, postMiddlewares
.validateFields, postController.postPost);
router.get('/post', tokenMiddlewares.authenticateToken, postController.getAll);
router.get('/post/:id', tokenMiddlewares.authenticateToken, postController.getOne);

module.exports = router;
