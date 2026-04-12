const http = require("http");
const PORT = 1900;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end(" <h1> Hello World </h1>  ");
});

myServer.listen(PORT, localHost, () => {
  console.log(`The Server Is Runing At http://${localHost}:${PORT}`);
});
