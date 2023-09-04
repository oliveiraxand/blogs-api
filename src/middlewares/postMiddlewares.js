const { CategoryService } = require('../services');

const validateFields = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const { data } = await CategoryService.findAll();
  const result2 = data.filter(({ dataValues }) => categoryIds.includes(dataValues.id));
  // const result = categoryIds.filter((category) => data.includes(category));
  // console.log(result2.length, categoryIds.length);
  if (categoryIds.length !== result2.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

module.exports = {
  validateFields,
  validateCategory,
};