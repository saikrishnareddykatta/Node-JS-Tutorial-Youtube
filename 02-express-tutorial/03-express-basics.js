const express = require("express");
// express returns a function
const app = express();
// Express expicilty returns the status code of the response message
// but it is good standard to mention status as part of the response
// Home Page
app.get("/", (req, res) => {
  console.log("User hit the resource");
  res.status(200).send("Home Page");
});
// About Page
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});
// any other page excluding Home and About Pages
app.all("*", (req, res) => {
  res.status(404).send("<h1>No Resources Found</h1>");
});

// a common converntion to write a console log statement insie the listen method
app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
