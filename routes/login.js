const express = require('express');
const router = express.Router();
const { sanitizeLogin } = require('../middleware/sanitize');
const { getIndex, logUserIn } = require('../controllers/login');
const { catchAsyncErrors } = require('../utils/errorHandler');

router.get('/', getIndex);

router.post('/', sanitizeLogin, catchAsyncErrors(logUserIn));

module.exports = router;
