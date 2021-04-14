const express = require('express');
const router = express.Router();
const { sanitizeLogin } = require('../middleware/sanitize');
const { getIndex, logUserIn } = require('../controllers/login');

router.get('/', getIndex);

router.post('/', sanitizeLogin, logUserIn);

module.exports = router;
