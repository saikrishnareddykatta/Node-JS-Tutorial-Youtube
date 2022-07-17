const express = require("express");
const app = express();
const taskRoute = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();

const port = 3000;

// Middleware Setup
app.use(express.json()); // We are using express.json() to parse the incoming request body from Client as JSON body to JS Object

app.use("/api/v1/tasks", taskRoute);

app.get("/hello", (req, res) => {
  res.send("Hello from Server");
});

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

// Routes

// app.get("/api/v1/tasks") - get all the tasks
// app.post("/api/v1/tasks") - create a new task
// app.get("/api/v1/tasks/:id") - get single task
// app.patch("/api/v1/tasks/:id") - update task
// app.delete("/api/v1/tasks/:id") - delete task
