exports.wrapperHandleError = (err, req, res, next) => {
  const status = err.status || 500;
  res
    .status(status)
    .json({
      status,
      message: err.message
    });
};

exports.catchAsync = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  }
}
