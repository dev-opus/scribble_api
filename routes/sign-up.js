const express = require('express');
const router = express.Router();
const { sanitizeSignup } = require('../middleware/sanitize');
const checkUser = require('../middleware/checkUser');
const { getIndex, createUser } = require('../controllers/sign-up');

router.get('/', getIndex);

router.post('/', sanitizeSignup, checkUser, createUser);

module.exports = router;
