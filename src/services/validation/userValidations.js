const db = require('../../models');

const existsEmail = async (email) => {
  const allUsers = await db.User.findAll();
  return allUsers.some((user) => user.email === email);
};

const validationEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

module.exports = {
  existsEmail,
  validationEmail,
};
