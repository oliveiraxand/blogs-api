const db = require('../models');

const postCategory = async (name) => {
  const insert = await db.Category.create({ name });
  return { status: 'CREATED', data: insert };
};

const findAll = async () => {
  const categories = await db.Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
};

module.exports = {
  postCategory,
  findAll,
};
