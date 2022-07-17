const mongoose = require("mongoose");
// const connectionString =
//   "mongodb+srv://saikatta:HoneyWell@nodeexpressprojects.4wd4z.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

// mongoose
//   .connect(connectionString)
//   .then(() => console.log("Connected to the DB...."))
//   .catch((err) => console.log(err));

const connectDB = (url) => {
  return mongoose.connect(url);
};

module.exports = connectDB;
