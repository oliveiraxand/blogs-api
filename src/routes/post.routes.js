const router = require('express').Router();
const { postController } = require('../controllers');
const { tokenMiddlewares, postMiddlewares } = require('../middlewares');

router.post('/post', tokenMiddlewares.authenticateToken, postMiddlewares
.validateCategory, postMiddlewares
.validateFields, postController.postPost);
router.get('/post', tokenMiddlewares.authenticateToken, postController.getAll);
router.get('/post/:id', tokenMiddlewares.authenticateToken, postController.getOne);
router.put('/post/:id', tokenMiddlewares
.authenticateToken, postMiddlewares.validateEditPost, postController.editPost);
router.delete('/post/:id', tokenMiddlewares
  .authenticateToken, postMiddlewares.validateDeletePost, postController.deletePost);

module.exports = router;
