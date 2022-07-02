const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  // I have entered name Robin and clicked submit button but
  // if we are trying the req.body here we are getting the value as undefined
  // by default req.body gives us undefined, it will only provide body when use of middleware functions like
  // express.json() or express.urlencoded()
  //console.log(req.body);
  const { userName } = req.body;
  if (userName) {
    res.send(`Welcome ${userName}`);
    return;
  }
  res.status(401).send("Please Provide Credentials");
});

module.exports = router;
