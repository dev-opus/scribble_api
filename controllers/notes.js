const Note = require('../models/Notes');

const getNotes = async (req, res) => {
  const { pageSize } = req.query;

  if (!pageSize) {
    const notes = await Note.find({})
      .select('-__v')
      .populate('author', 'username -_id')
      .limit(10)
      .lean();

    return res.json({
      notes,
    });
  }

  const notes = await Note.find({}).select('-__v').limit(pageSize).lean();
  return res.json({
    notes,
  });
};

const getNoteById = async (req, res) => {
  const { id } = req.params;

  const note = await Note.findById(id)
    .populate('author', 'username -_id')
    .lean();

  if (!note) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: `no note with id of '${id} found'`,
    });
  }

  res.json({
    note,
  });
};

const createNote = async (req, res) => {
  const { noteText, tags } = req.body;
  const userId = req.userId;

  const newNote = await Note.create({
    author: userId,
    note_text: noteText,
    tags,
  });

  res.status(201).json({
    message: 'note created',
    note: newNote,
  });
};

const deleteNoteById = async (req, res) => {
  const { id } = req.params;

  const result = await Note.deleteOne({ _id: id });

  if (result.deletedCount !== 1) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: `no note with the id of '${id}' found `,
    });
  }

  res.json({
    message: `deleted one note with the id of '${id}' `,
  });
};

module.exports = { getNotes, getNoteById, createNote, deleteNoteById };
