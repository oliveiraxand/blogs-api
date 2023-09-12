// const jwt = require('jsonwebtoken');
const { userService } = require('../services');
const mapStatusHTTP = require('../utils/mapHttpStatus');

// const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const postLogin = async (req, res) => {
  const { email } = req.body;
  const serviceResponse = await userService.postLogin(email);

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

const deleteMe = async (req, res) => {
  const { id } = req.user;
  await userService.deleteMe(id);
  res.status(204).end();
};

module.exports = {
  postLogin,
  getAllUsers,
  postUser,
  getOneUser,
  deleteMe,
};