const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';
const postLogin = (email) => {
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { email } }, secret, jwtConfig);
  return { status: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  postLogin,
};
