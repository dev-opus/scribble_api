const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { sanitizeUser } = require('../middleware/sanitize');
const checkUser = require('../middleware/checkUser');

const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/users');

router.get('/', verifyToken, getUsers);

router.get('/:id', verifyToken, getUserById);

router.put('/:id', sanitizeUser, checkUser, verifyToken, updateUser);

router.delete('/:id', verifyToken, deleteUser);

module.exports = router;
