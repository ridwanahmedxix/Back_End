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
  res.end("Helllo World");
});

myServer.listen(PORT, localHost, () => {
  console.log(`THE SERVER IS RUNING AT http://${localHost}:${PORT}`);
});
