const catchAsyncErrors = asyncFunc => {
  return function (req, res, next) {
    return asyncFunc(req, res, next).catch(next);
  };
};

const handleError = (err, res) => {
  const { message } = err;
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    status: 'Error',
    statusCode,
    message,
  });
};

module.exports = { handleError, catchAsyncErrors };
