const fs = require("fs");
const http = require("http");
const PORT = 3300;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hello World");
});

myServer.listen(PORT, localHost, () => {
  console.log(`THE SERVER IS RUNING AT http://${localHost}:${PORT}`);
});
