const router = require('express').Router();
const { categoryController } = require('../controllers');

const { tokenMiddlewares, categoryMiddlewares } = require('../middlewares');

router.post('/categories', tokenMiddlewares
.authenticateToken, categoryMiddlewares.validateName, categoryController.postCategory);

module.exports = router;
