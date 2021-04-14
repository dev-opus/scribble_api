require('dotenv').config();
const jwt = require('jsonwebtoken');

const genToken = user => {
  const _id = user._id;
  const expiresIn = '4 days';

  const payload = {
    sub: _id,
    iat: Date.now(),
  };

  const signedToken = jwt.sign(payload, process.env.SECRET_KEY);

  return {
    token: 'Bearer ' + signedToken,
    expires: expiresIn,
  };
};

module.exports = genToken;
