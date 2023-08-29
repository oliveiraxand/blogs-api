const db = require('../models');

const authenticateUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400)
      .json({ message: 'Some required fields are missing' });
  }

  const users = await db.User.findAll();
  const authenticatedUser = users
    .find((user) => user.email === email && user.password === password);

  if (!authenticatedUser) {
    return res.status(400)
      .json({ message: 'Invalid fields' });
  }

  req.authenticatedUser = authenticatedUser;

  next();
};

module.exports = {
  authenticateUser,
};