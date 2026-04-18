const fs = require("fs");
const http = require("http");
const PORT = 2900;
const localHost = "127.0.0.1";

const handleReadFile = (fileName, statusCode, req, res) => {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(202, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    handleReadFile("./views/index.html", 200, req, res);
  } else if (req.url === "/about") {
    handleReadFile("./views/about.html", 200, req, res);
  } else if (req.url === "/contact") {
    handleReadFile("./views/contact.html", 200, req, res);
  } else {
    handleReadFile("./views/error.html", 500, req, res);
  }
});

myServer.listen(PORT, localHost, () => {
  console.log(`THE SERVER IS RUNING AT http://${localHost}:${PORT}`);
});
