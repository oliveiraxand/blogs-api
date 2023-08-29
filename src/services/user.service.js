const jwt = require('jsonwebtoken');
const db = require('../models');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';
const postLogin = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);
  return { status: 'SUCCESSFUL', data: { token } };
};
const createUser = async (userObj) => {
  const { displayName, email, password, image } = userObj;

  const userData = {
    displayName,
    email,
    password,
  };

  if (image) {
    userData.image = image;
  }

  const newUser = await db.User.create(userData);

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);

  return { status: 'CREATED', newUser, token };
};

module.exports = {
  postLogin,
  createUser,
};
