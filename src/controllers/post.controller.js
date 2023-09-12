const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapHttpStatus');

const postPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  console.log(req.user);
  const postObj = { title, content, categoryIds, userId: req.user.id };
  const serviceResponse = await postService.postPost(postObj);
  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const getAll = async (req, res) => {
  const serviceResponse = await postService.getAll();
  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const getOne = async (req, res) => {
  const { id } = req.params;
  const serviceResponse = await postService.getOne(id);
  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const serviceResponse = await postService.editPost({ title, content }, id);
  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  await postService.deletePost(id);
  res.status(204).end();
};

module.exports = {
  postPost,
  getAll,
  getOne,
  editPost,
  deletePost,
};