require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'no authorization header',
    });
  }

  const token = authHeader.split(' ')[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      return res.status(400).json({
        notice: 'operation failed',
        reason: err.message,
      });
    }

    req.userId = payload.sub;
    next();
  });
};

module.exports = verifyToken;
