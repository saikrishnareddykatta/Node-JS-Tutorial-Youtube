const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "must provide task name"],
    maxLength: [20, "task name cannot be greater than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Tasks", TaskSchema);
