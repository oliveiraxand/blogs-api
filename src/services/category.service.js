const db = require('../models');

const postCategory = async (name) => {
  const insert = await db.Category.create({ name });
  return { status: 'CREATED', data: insert };
};

module.exports = {
  postCategory,
};
