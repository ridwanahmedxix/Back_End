const fs = require("fs");
const http = require("http");
const PORT = 2300;
const localHost = "127.0.0.1";

const handleReadFile = () => {
  fs.readFile("index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.writeHead(202, { "Content-Type": "text/html" });
      res.write(data);
    }
  });
};

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
  }
});

myServer.listen(PORT, localHost, () => {
  console.log(`THE SERVER IS RUNING AT http://${localHost}:${PORT}`);
});
