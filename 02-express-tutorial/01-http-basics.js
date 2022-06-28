const http = require("http");

http
  .createServer((req, res) => {
    // console.log(req);
    // console.log(req.method);
    // console.log(req.url);
    const url = req.url;
    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Home Page</h1>");
      res.end();
    } else if (url === "/contact") {
      //URL is case-sensitive,
      //if we try with Contact instead of contact, it will redirect to Page Not Found
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h1>Contact Page</h1>");
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Page Not Found</h1>");
      res.end();
    }
  })
  .listen(5000);
