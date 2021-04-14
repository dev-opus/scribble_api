require('dotenv').config();

const mongoose = require('mongoose');

const connection = mongoose.createConnection(
  process.env.DB_STRING,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = connection;
