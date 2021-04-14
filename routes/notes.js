const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const { sanitizeNote } = require('../middleware/sanitize');

const {
  getNotes,
  getNoteById,
  createNote,
  deleteNoteById,
} = require('../controllers/notes');

router.get('/', verifyToken, getNotes);

router.get('/:id', verifyToken, getNoteById);

router.post('/', verifyToken, sanitizeNote, createNote);

router.delete('/:id', verifyToken, deleteNoteById);

module.exports = router;
