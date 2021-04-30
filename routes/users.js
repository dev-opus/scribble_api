const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { sanitizeUser } = require('../middleware/sanitize');
const checkUser = require('../middleware/checkUser');
const { catchAsyncErrors } = require('../utils/errorHandler');

const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users');

router.get('/', verifyToken, catchAsyncErrors(getUsers));

router.get('/:id', verifyToken, catchAsyncErrors(getUserById));

router.put(
  '/:id',
  sanitizeUser,
  checkUser,
  verifyToken,
  catchAsyncErrors(updateUser)
);

router.delete('/:id', verifyToken, catchAsyncErrors(deleteUser));

module.exports = router;
