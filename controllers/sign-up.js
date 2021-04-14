const serverErrors = require('../utils/errorHandler');
const { genSaltHash } = require('../utils/password');
const User = require('../models/Users');

const getIndex = (req, res) => {
  res.json({
    message: 'Welcome to the Sign up endpoint',
  });
};

const createUser = async (req, res) => {
  const { email, username, password } = req.body;
  const { salt, hash } = genSaltHash(password);

  try {
    const user = await User.create({
      username,
      email,
      salt,
      hash,
    });

    res.status(201).json({
      message: 'user created',
      user,
    });
  } catch (error) {
    serverErrors(res, error);
  }
};

module.exports = { getIndex, createUser };
