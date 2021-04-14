const sanitizeSignup = (req, res, next) => {
  const { username, password, email } = req.body;
  if (!username || username.trim().length <= 0) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'username is empty, please provide a username',
    });
  }

  if (username.trim().length < 4) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'username is too short, must be at least 4 characters',
    });
  }

  if (username.trim().length > 20) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'username is too long, must be between 4 and 20 characters',
    });
  }

  if (username.trim().split('').includes('')) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'spaces not allowed in username',
    });
  }

  if (!password || password.trim().length <= 0) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'password is empty, please provide a password',
    });
  }

  if (password.trim().length < 7) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'password is too short, must be at least 7 characters',
    });
  }

  if (password.trim().length > 20) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'password is too long, must be between 7 and 20 characters',
    });
  }

  function validateEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  if (!email || email.trim().length <= 0) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'email is empty, please provide an email address',
    });
  }

  if (!validateEmail(email)) {
    return res.json({
      notice: 'operation failed',
      reason: 'Invalid email address, please input a valid email address',
    });
  }

  next();
};

const sanitizeLogin = (req, res, next) => {
  const { password, email } = req.body;

  function validateEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }

  if (!email || email.trim().length <= 0) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'email is empty, please provide an email address',
    });
  }

  if (!validateEmail(email)) {
    return res.json({
      notice: 'operation failed',
      reason: 'Invalid email address, please input a valid email address',
    });
  }

  if (!password || password.trim().length <= 0) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'password is empty, please provide a password',
    });
  }

  if (password.trim().length < 7) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'password is too short, must be at least 7 characters',
    });
  }

  if (password.trim().length > 20) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'password is too long, must be between 7 and 20 characters',
    });
  }

  next();
};

const sanitizeUser = (req, res, next) => {
  const { username } = req.body;
  if (!username || username.trim().length <= 0) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'username is empty, please provide a username',
    });
  }

  if (username.trim().length < 4) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'username is too short, must be at least 4 characters',
    });
  }

  if (username.trim().length > 20) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'username is too long, must be between 4 and 20 characters',
    });
  }

  if (username.trim().split('').includes(' ')) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'spaces not allowed in username',
    });
  }

  next();
};

const sanitizeNote = (req, res, next) => {
  const { noteText } = req.body;

  if (!noteText || noteText.trim().length === 0) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'note is too short, must be between 4 and 70 characters',
    });
  }

  if (noteText.trim().length > 70) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: 'note is too long, must be between 4 and 70 characters',
    });
  }

  next();
};

module.exports = { sanitizeSignup, sanitizeLogin, sanitizeUser, sanitizeNote };
