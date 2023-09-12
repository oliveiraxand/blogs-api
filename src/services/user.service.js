const jwt = require('jsonwebtoken');
const db = require('../models');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';
const findByEmail = async (email) => {
  const user = await db.User.findOne({ where: { email } });
  return user;
};
const postLogin = async (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const user = await findByEmail(email);
  const token = jwt.sign({ id: user.dataValues.id, email }, secret, jwtConfig);
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
  const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  const user = await findByEmail(email);
  const token = jwt.sign({ id: user.dataValues.id, email }, secret, jwtConfig);
  return { status: 'CREATED', newUser, token };
};

const findAll = async () => {
  const users = await db.User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  return { status: 'SUCCESSFUL', data: users };
};

const findById = async (id) => {
  const user = await db.User.findByPk(id, {
    attributes: ['id', 'displayName', 'email', 'image'],
  });
  if (!user) {
    return { status: 'NOT_FOUND', data: { message: 'User does not exist' } };
  }
  return { status: 'SUCCESSFUL', data: user };
};

module.exports = {
  postLogin,
  createUser,
  findAll,
  findById,
  findByEmail,
};
