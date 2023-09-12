const { CategoryService } = require('../services');
const { getOne } = require('../services/post.service');

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
  if (categoryIds.length !== result2.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }
  next();
};

const validateEditPost = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user; // Obtém o ID do usuário do token
  const { title, content } = req.body;
  const post = await getOne(id);
  
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (post.data.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};
const validateDeletePost = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;
  const post = await getOne(id);
  if (post.status === 'NOT_FOUND') {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  if (post.data.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};

module.exports = {
  validateFields,
  validateCategory,
  validateEditPost,
  validateDeletePost,
};