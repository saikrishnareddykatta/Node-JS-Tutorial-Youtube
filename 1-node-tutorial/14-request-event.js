const http = require("http");

// Earlier we used to create a server and provided response in the callback function
// const server = http.createServer((req, res) => {
//   console.log(req);
//   res.write("Hello, Welcome to our Page");
//   res.end();
//   return;
// });

//Using Event Emitter API
const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it
server.on("request", (req, res) => {
  console.log("Request came through");
  res.write("Hello, this response is through Event Emitter concept");
  res.end();
  return;
});

server.listen(5000);
