const { CategoryService } = require('../services');
const mapStatusHTTP = require('../utils/mapHttpStatus');

const postCategory = async (req, res) => {
  const { name } = req.body;
  const serviceResponse = await CategoryService.postCategory(name);
  res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
};

module.exports = {
  postCategory,
};
