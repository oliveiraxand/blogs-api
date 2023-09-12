const db = require('../models');

const postCategory = async (name) => {
  const insert = await db.Category.create({ name });
  return { status: 'CREATED', data: insert };
};

const findAll = async () => {
  const categories = await db.Category.findAll();
  return { status: 'SUCCESSFUL', data: categories };
};

const findById = async (id) => {
  const categorie = await db.Category.findByPk(id);
  return { status: 'SUCCESSFUL', data: categorie };
};

module.exports = {
  postCategory,
  findAll,
  findById,
};
