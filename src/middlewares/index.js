const loginMiddleware = require('./loginMiddleware');
const userMiddlewares = require('./userMiddlewares');
const tokenMiddlewares = require('./tokenMiddlewares');
const categoryMiddlewares = require('./categoryMiddlewares');
const postMiddlewares = require('./postMiddlewares');

module.exports = {
  loginMiddleware,
  userMiddlewares,
  categoryMiddlewares,
  tokenMiddlewares,
  postMiddlewares,
};