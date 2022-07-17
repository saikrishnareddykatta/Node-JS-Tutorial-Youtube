const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

// as of now I am using router.get but later when we add more routes
// we can start chaining the request methods of same route
// using router.route.get(getControllerFunction).post(postControllerFunction)
// router.get("/", (req, res) => {
//   res.send("All Items");
// });

// router.get("/", getAllTasks);

// Now let's use the router.route to chain routes

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
