const loginMiddleware = require('./loginMiddleware');
const userMiddlewares = require('./userMiddlewares');
const tokenMiddlewares = require('./tokenMiddlewares');
const categoryMiddlewares = require('./categoryMiddlewares');

module.exports = {
  loginMiddleware,
  userMiddlewares,
  categoryMiddlewares,
  tokenMiddlewares,
};