const express = require("express");
// PATH built-in module
const path = require("path");
// express returns a function
// we need to instantiate the express
const app = express();
// setup static and middleware
// storing all the static pages of the project in a folder named public
// Express will take care of the paths, status codes, MIME types, content types  of the static resources
app.use(express.static("./public"));
// Home Page
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "navbar-app", "index.html"));
});
// Handling the unavailable resources
app.all("*", (req, res) => {
  res.status(404).send("Resource Not Available");
});
// starting the server
app.listen(5000, () => {
  console.log("Server is listening on port 5000.....");
});
