const express = require("express");
const app = express();
const logger = require("./logger");
// req => middleware => res

app.use("/api", logger, (req, res) => {
  console.log(req.url);
  res.send("This message is from app.use() method");
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on Port 5000.....");
});
