require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route mount paths
app.use('/api', require('./routes/index'));
app.use('/api/sign-up', require('./routes/sign-up'));
app.use('/api/login', require('./routes/login'));
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

// invalid path error handler
app.use('*', (req, res) => {
  res.status(404).json({
    message: `cannot ${req.method} "${req.originalUrl}" on this API`,
    mainRoutes: [
      '/api',
      '/api/sign-up',
      '/api/login',
      '/api/users',
      '/api/notes',
    ],
  });
});

app.listen(port, () => console.log(`server started on port ${port}`));
