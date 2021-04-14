const mongoose = require('mongoose');
const connection = require('../config/database');

const Schema = mongoose.Schema;

const notesSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },

  note_text: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 70,
  },

  tags: [{ type: String }],

  added: {
    type: Date,
    default: Date.now,
  },
});

const Note = connection.model('Note', notesSchema);

module.exports = Note;
