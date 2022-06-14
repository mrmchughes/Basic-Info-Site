const http = require("http");
let url = require("url");
let fs = require("fs");
const path = require("path");

http
  .createServer(function (req, res) {
    let path = url.parse(req.url, true).pathname;
    switch (path) {
      case "/":
        fs.readFile("index.html", (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
        break;
      case "/about":
        fs.readFile("about.html", (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      case "/contact":
        fs.readFile("contact-me.html", (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
      default:
        fs.readFile("404.html", (err, data) => {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
        break;
    }
  })
  .listen(8080);
