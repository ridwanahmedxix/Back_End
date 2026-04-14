const student = require("./index");
const http = require("http");
const PORT = 3600;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "plain/html" });
});
