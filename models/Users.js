const mongoose = require('mongoose');
const connection = require('../config/database');

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  username: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 20,
  },

  email: {
    type: String,
    required: true,
  },

  salt: {
    type: String,
    required: true,
  },

  hash: {
    type: String,
    required: true,
  },

  date_joined: {
    type: Date,
    default: Date.now,
  },
});

const User = connection.model('User', usersSchema);

module.exports = User;
