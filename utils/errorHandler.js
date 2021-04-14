const serverErrors = (res, err) => {
  res.status(500).json({
    notice: 'an error occurred',
    errMsg: err.message,
  });
};

module.exports = serverErrors;
