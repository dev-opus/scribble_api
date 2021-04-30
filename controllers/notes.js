const Note = require('../models/Notes');
const User = require('../models/Users');
const serverErrors = require('../utils/errorHandler');

const getNotes = async (req, res) => {
  try {
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
  } catch (error) {
    serverErrors(res, error);
  }
};

const getNoteById = async (req, res) => {
  try {
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
  } catch (error) {
    serverErrors(res, error);
  }
};

const createNote = async (req, res) => {
  try {
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
  } catch (error) {
    serverErrors(res, error);
  }
};

const deleteNoteById = async (req, res) => {
  try {
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
  } catch (error) {
    serverErrors(res, error);
  }
};

module.exports = { getNotes, getNoteById, createNote, deleteNoteById };
