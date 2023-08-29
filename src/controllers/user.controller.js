const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapHttpStatus');

const postLogin = (req, res) => {
  const { email } = req.body;
  const serviceResponse = userService.postLogin(email);

  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

module.exports = {
  postLogin,
};