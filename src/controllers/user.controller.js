// const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapHttpStatus');

// const secret = process.env.JWT_SECRET || 'seusecretdetoken';

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

const getAllUsers = async (req, res) => {
  const serviceResponse = await userService.findAll();
  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  const serviceResponse = await userService.findById(id);
  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

module.exports = {
  postLogin,
  getAllUsers,
  postUser,
  getOneUser,
};