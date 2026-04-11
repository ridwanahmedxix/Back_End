const http = require("http");
const PORT = 2300;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end(" <h1> Hello ! This is my first server  </h1>  ");
});

myServer.listen(PORT, localHost, () => {
  console.log(`The server is runing at http://${localHost}:${PORT}`);
});
