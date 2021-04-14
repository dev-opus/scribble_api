module.exports.getIndex = (req, res) => {
  res.json({
    message: 'Welcome to the Scribble API!',
    mainRoutes: [
      '/api',
      '/api/sign-up',
      '/api/login',
      '/api/users',
      '/api/notes',
    ],
  });
};
