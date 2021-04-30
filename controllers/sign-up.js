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

  const user = await User.create({
    username,
    email,
    login_details: {
      salt,
      hash,
    },
  });

  res.status(201).json({
    message: 'user created',
    user,
  });
};

module.exports = { getIndex, createUser };
