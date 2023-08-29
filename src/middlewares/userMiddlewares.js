const { validationEmail, existsEmail } = require('../services/validation/userValidations');

const validateDisplayName = (req, res, next) => {
  const { displayName } = req.body;

  if (!displayName || displayName.length < 8) {
    return res
      .status(400).json({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length < 6) {
    return res
      .status(400).json({ message: '"password" length must be at least 6 characters long' });
  }

  next();
};

const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const isExistsEmail = await existsEmail(email);
  if (isExistsEmail) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const validateFormatEmail = (req, res, next) => {
  const { email } = req.body;

  if (!validationEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  next();
};

module.exports = {
  validateDisplayName,
  validatePassword,
  validateEmail,
  validateFormatEmail,
};