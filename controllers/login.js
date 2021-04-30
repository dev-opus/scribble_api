const User = require('../models/Users');
const { verifyPassword } = require('../utils/password');
const genToken = require('../utils/issueJwt');

const getIndex = (req, res) => {
  res.json({
    message: 'Welcome to the Login endpoint',
  });
};

const logUserIn = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).lean();

  if (!user) {
    return res.status(403).json({
      notice: 'operation failed',
      reason: 'no user in the database with the provided email',
    });
  }

  const { salt, hash } = user.login_details;

  const valid = verifyPassword(password, salt, hash);

  if (!valid) {
    return res.status(403).json({
      notice: 'operation failed',
      reason: 'incorrect password',
    });
  }

  const jwtTokenObj = genToken(user);

  res.status(200).json({
    message: 'logged in successfully',
    bearerToken: jwtTokenObj.token,
    expiresIn: jwtTokenObj.expires,
  });
};

module.exports = { getIndex, logUserIn };
