const db = require('../models');
const { generateToken } = require('../utils');

const findByEmail = async (email) => {
  const user = await db.User.findOne({ where: { email } });
  return user;
};

const postLogin = async (email) => {
  const user = await findByEmail(email);
  const token = await generateToken.generate(email, user.dataValues.id);
  return { status: 'SUCCESSFUL', data: { token } };
};
const createUser = async (userObj) => {
  const { displayName, email, password, image } = userObj;

  const userData = {
    displayName,
    email,
    password,
  };

  if (image) userData.image = image;
  
  const newUser = await db.User.create(userData);
  const user = await findByEmail(email);
  const token = await generateToken.generate(email, user.dataValues.id);

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
