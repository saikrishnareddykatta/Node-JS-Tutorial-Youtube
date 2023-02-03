require("dotenv").config();
// async errors

const express = require("express");
const app = express();

// Middleware Import

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// Express Middleware

// The express.json() function is a built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());

// Routes

app.get("/", (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products Link</a>');
});

// Products Route

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3200;

const start = async () => {
  try {
    //connectDB
    app.listen(port, console.log(`Server is listening on Port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
