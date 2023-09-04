const db = require('../models');

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

module.exports = {
  postPost,
};
