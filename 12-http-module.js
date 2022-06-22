const http = require("http");

//when browser hits the web server with a request below code will be executed
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //instead of using write and end methods, we can use end method itself
    //res.end("Hi! welcome to our home page");
    res.write("Hi! welcome to our home page");
    res.end();
    return;
  }
  if (req.url === "/about") {
    //instead of using write and end methods, we can use end method itself
    //res.end("Here is our Short History");
    res.write("Here is our Short History");
    res.end();
    return;
  }
  //instead of using write and end methods, we can use end method itself
  //res.end(``<h1>Oops!!!<h1>
  //<p>The page you are looking for is not available</p>
  //<a href="/">Back to Home Page</a>``)
  res.write(`<h1>Oops!!!<h1>
  <p>The page you are looking for is not available</p>
  <a href="/">Back to Home Page</a>`);
  res.end();
});

//listen method is used to listen the server at partciular port number
server.listen(5000);
