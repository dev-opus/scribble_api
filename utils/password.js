const crypto = require('crypto');

const genSaltHash = password => {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto
    .pbkdf2Sync(password, salt, 10000, 32, 'sha512')
    .toString('hex');

  return { salt, hash };
};

const verifyPassword = (password, salt, hash) => {
  const testHash = crypto
    .pbkdf2Sync(password, salt, 10000, 32, 'sha512')
    .toString('hex');

  return testHash === hash;
};

module.exports = { genSaltHash, verifyPassword };
