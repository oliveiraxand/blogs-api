const { findById } = require('./user.service');
const db = require('../models');
const { findByPostId } = require('./postCategory.service');

const postPostCategories = async (postId, categoryId) => {
  const promises = categoryId.map((id) => db.PostCategory.create({ postId, categoryId: id }));
  await Promise.all(promises);
};

const postPost = async (postBody) => {
  const body = {
    ...postBody,
  };
  body.published = Date.now();
  body.updated = Date.now();
  const insert = await db.BlogPost.create(body);
  await postPostCategories(insert.id, postBody.categoryIds);
  return { status: 'CREATED', data: insert };
};

const getAll = async () => {
  const posts = await db.BlogPost.findAll();
  const promises = posts.map(async (post) => {
    const user = await findById(post.userId);
    const categories = await findByPostId(post.id);
    return {
      ...post.toJSON(),
      user: user.data,
      categories: categories.data,
    };
  });

  const postsWithUsers = await Promise.all(promises);
  return { status: 'SUCCESSFUL', data: postsWithUsers };
};

const getOne = async (id) => {
  const post = await db.BlogPost.findByPk(id);
  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }

  const user = await findById(post.userId);
  const categories = await findByPostId(post.id);

  return {
    status: 'SUCCESSFUL',
    data: {
      ...post.toJSON(),
      user: user.data,
      categories: categories.data,
    },
  };
};

module.exports = {
  postPost,
  getAll,
  getOne,
};
