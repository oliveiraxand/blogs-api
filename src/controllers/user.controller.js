const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapHttpStatus');

const postLogin = (req, res) => {
  const { email } = req.body;
  const serviceResponse = userService.postLogin(email);

  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const userObj = { displayName, email, password, image };
  const serviceResponse = await userService.createUser(userObj);
  res.status(mapStatusHTTP(serviceResponse.status)).json({ token: serviceResponse.token });
};

module.exports = {
  postLogin,
  postUser,
};