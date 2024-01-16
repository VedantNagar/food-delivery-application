const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({
      msg: 'Something went wrong, please try again message from error middleware',
    });
};

module.exports = errorHandlerMiddleware;
