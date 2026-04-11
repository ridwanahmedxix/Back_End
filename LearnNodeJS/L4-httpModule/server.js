// ------- SERVER CREATE -----------

// ------------- PART - 1 ---------------

const http = require("http");

const PORT = 3300;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end(" Hello , I am your first server  ");
});

myServer.listen(PORT, localHost, () => {
  console.log(`The server is runing at http://${localHost}:${PORT}`);
});
