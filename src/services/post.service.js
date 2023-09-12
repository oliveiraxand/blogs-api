const db = require('../models');
const { findById } = require('./user.service');
const { findByPostId } = require('./postCategory.service');

const postPostCategories = async (postId, categoryId) => {
  await Promise.all(categoryId.map((id) => db.PostCategory.create({ postId, categoryId: id })));
};

const postPost = async (postBody) => {
  const insert = await db.BlogPost.create({
    ...postBody,
    published: Date.now(),
    updated: Date.now(),
  });
  await postPostCategories(insert.id, postBody.categoryIds);
  return { status: 'CREATED', data: insert };
};

const getAll = async () => {
  const posts = await db.BlogPost.findAll();
  const postsWithUsers = await Promise.all(posts.map(async (post) => {
    const [user, categories] = await Promise.all([
      findById(post.userId),
      findByPostId(post.id),
    ]);
    return { ...post.toJSON(), user: user.data, categories: categories.data };
  }));
  return { status: 'SUCCESSFUL', data: postsWithUsers };
};

const getOne = async (id) => {
  const post = await db.BlogPost.findByPk(id);
  if (!post) {
    return { status: 'NOT_FOUND', data: { message: 'Post does not exist' } };
  }
  const [user, categories] = await Promise.all([
    findById(post.userId),
    findByPostId(post.id),
  ]);
  return { status: 'SUCCESSFUL',
data: { ...post
    .toJSON(),
user: user.data,
categories: categories.data } };
};

const editPost = async (postBody, id) => {
  await db.BlogPost.update({ title: postBody.title, content: postBody.content }, { where: { id } });
  const updatedPost = await getOne(id);
  return { status: 'SUCCESSFUL', data: updatedPost.data };
};

const deletePost = async (id) => {
  try {
    await db.sequelize.transaction(async (transaction) => {
      await db.PostCategory.destroy({ where: { postId: id }, transaction });
      await db.BlogPost.destroy({ where: { id }, transaction });
    });
  } catch (error) {
    // Trate o erro aqui, você pode registrar ou fazer algo adequado com o erro.
  }
};

module.exports = { postPost, getAll, getOne, editPost, deletePost };
