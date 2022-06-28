const http = require("http");
const { readFileSync } = require("fs");
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeLogic = readFileSync("./navbar-app/browser-app.js");
const homeLogo = readFileSync("./navbar-app/logo.svg");
http
  .createServer((req, res) => {
    const url = req.url;
    console.log(req.url);
    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(homePage);
      res.end();
    } else if (url === "/styles.css") {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(homeStyles);
      res.end();
    } else if (url === "/browser-app.js") {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(homeLogic);
      res.end();
    } else if (url === "/logo.svg") {
      res.writeHead(200, { "Content-Type": "image/svg+xml" });
      res.write(homeLogo);
      res.end();
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>Oops!!! Page Not Found</h1>");
      res.end();
    }
  })
  .listen(5000);
