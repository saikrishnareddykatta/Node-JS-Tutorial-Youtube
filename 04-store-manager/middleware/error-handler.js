const errorHandlerMiddleware = async (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ msg: "Something wrong please try again" });
};

module.exports = errorHandlerMiddleware;
