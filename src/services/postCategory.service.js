const db = require('../models');
const { findById } = require('./category.service');

const findByPostId = async (id) => {
  const categories = await db.PostCategory.findAll({ where: { postId: id } });
  const promises = await categories.map(async (categorie) => {
    console.log(categorie);
    const category = await findById(categorie.dataValues.categoryId);
    return {
      id: category.data.id,
      name: category.data.name,
    };
  });
  const result = await Promise.all(promises);
  return { status: 'SUCESSFUL', data: result };
};

module.exports = {
  findByPostId,
};