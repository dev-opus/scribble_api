const catchAsyncErrors = asyncFunc => {
  return function (req, res, next) {
    return asyncFunc(req, res, next).catch(next);
  };
};

const serverErrors = (res, err) => {
  res.status(500).json({
    notice: 'an error occurred',
    errMsg: err.message,
  });
};

module.exports = { serverErrors, catchAsyncErrors };
