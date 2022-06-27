const { readFile } = require("fs");
console.log("Starting first task");
readFile("../content/first.txt", "utf-8", (err, res) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(res);
  console.log("Completed the first task");
});
// Event Loop registers the Callback function
// It executes the immediate task
// in the meanwhile, the time consuming task is offloaded to file system
// execution of next tasks are going on
// if the readFile operation is completed, Event Loop puts that task at the end of the line
// checks whether any immediate code is there to run
// if not then it executes the registered Callback function
console.log("Starting the next task");
console.log("Starting the next task");
console.log("Starting the next task");
console.log("Starting the next task");
console.log("Starting the next task");
console.log("Starting the next task");
