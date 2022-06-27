const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page");
    res.end();
    return;
  } else if (req.url === "/about") {
    // Writing Blocking Code. A blocking code could be a nested for loop
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.write("About Page");
    res.end();
    return;
  } else {
    res.write("Error Page");
    res.end();
    return;
  }
});

server.listen(5000, () => {
  console.log("Server Listening on Port 5000........");
});
