const loginMiddleware = require('./loginMiddleware');
const userMiddlewares = require('./userMiddlewares');
const tokenMiddlewares = require('./tokenMiddlewares');

module.exports = {
  loginMiddleware,
  userMiddlewares,
  tokenMiddlewares,
};