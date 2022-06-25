const http = require("http");

// Event Loop will offload this task
const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

// I am assuming server.listen has more priorty and is executed immediately after synchronous code is executed
setTimeout(() => {
  console.log("I am setTimeout callback with 0 seconds");
}, 0);

// this asynchronous code will be offloaded to HTTP system and will execute when
// there is no immediate synchronous code to be executed
// Event Loop will listen to requests and then will execute the appropriate callback (which is the server callback mentioned above)
server.listen(5000, () => {
  console.log("Server is listening on port 5000....");
});

// this line will execute first beacuse it is synchronous code
console.log("I will run first");
console.log("I will run second");
