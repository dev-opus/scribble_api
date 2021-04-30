const express = require('express');
const router = express.Router();
const { sanitizeSignup } = require('../middleware/sanitize');
const checkUser = require('../middleware/checkUser');
const { getIndex, createUser } = require('../controllers/sign-up');
const { catchAsyncErrors } = require('../utils/errorHandler');

router.get('/', getIndex);

router.post('/', sanitizeSignup, checkUser, catchAsyncErrors(createUser));

module.exports = router;
