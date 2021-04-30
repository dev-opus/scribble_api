const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { sanitizeNote } = require('../middleware/sanitize');
const { catchAsyncErrors } = require('../utils/errorHandler');

const {
  getNotes,
  getNoteById,
  createNote,
  deleteNoteById,
} = require('../controllers/notes');

router.get('/', verifyToken, catchAsyncErrors(getNotes));

router.get('/:id', verifyToken, catchAsyncErrors(getNoteById));

router.post('/', verifyToken, sanitizeNote, catchAsyncErrors(createNote));

router.delete('/:id', verifyToken, catchAsyncErrors(deleteNoteById));

module.exports = router;
