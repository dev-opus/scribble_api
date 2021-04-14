const User = require('../models/Users');
const serverErrors = require('../utils/errorHandler');

const checkUser = async (req, res, next) => {
  const { username, email } = req.body;
  try {
    const user = await User.findOne({ email }).lean();

    if (user) {
      return res.status(403).json({
        notice: 'cannot perform operation',
        reason: 'user already exists',
      });
    }

    const user2 = await User.findOne({ username }).lean();

    if (user2) {
      return res.status(403).json({
        notice: 'cannot perform operation',
        reason: 'username is already taken',
      });
    }

    next();
  } catch (error) {
    serverErrors(res, error);
  }
};

module.exports = checkUser;
