const express = require("express");
const app = express();
const cors = require("cors");
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleWare = require("./middleware/error-handler");

const port = process.env.PORT || 3002; //PORT number depends upon the organization

// Middleware Setup
app.use(cors());
app.use(express.json()); // We are using express.json() to parse the incoming request body from Client as JSON body to JS Object
app.use("/api/v1/tasks", taskRoute);
app.get("/hello", (req, res) => {
  res.send("Hello from Server");
});
app.use("*", notFound); // Routes to Not Found when unhandled route is entered
app.use(errorHandlerMiddleWare); // Default Error Hanlders are need to written at the end of middleware function stack

// starting the connection to Database
const start = async (url) => {
  try {
    await connectDB(url);
    console.log("Connection to DB Successful.....");
    app.listen(port, () => {
      console.log(`Server is listening on Port ${port}....`);
    });
  } catch (error) {
    console.log(error);
  }
};
start(process.env.MONGO_URI);

// Below are the Routes used in this Application
// app.get("/api/v1/tasks") - get all the tasks
// app.post("/api/v1/tasks") - create a new task
// app.get("/api/v1/tasks/:id") - get single task
// app.patch("/api/v1/tasks/:id") - update task
// app.delete("/api/v1/tasks/:id") - delete task
