const student = require("./index");

const http = require("http");
const PORT = 2900;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my server");
  } else if (req.url === "/name") {
    req.end(student.getName());
  }
});

myServer.listen(PORT, localHost, () => {
  console.log(`THE SERVER IS RUNING AT http://${localHost}:${PORT}`);
});
