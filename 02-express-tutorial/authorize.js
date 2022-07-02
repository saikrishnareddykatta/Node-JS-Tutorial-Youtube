const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    console.log("Authorize");
    // We can add an parameter to the request object and send it to the next middleware function
    // we can access that paramter in the next middleware function
    req.user = { name: "John", id: "34" };
    next();
  } else {
    console.log("Unauthorized");
    res.status(401).send("Unauthorized");
  }
};

module.exports = authorize;
