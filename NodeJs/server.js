// const http = require("http");
// const port = 3000;
// const hostName = "127.0.0.1";

// const myServer = http.createServer((req, res) => {
//   res.writeHead(202, { "Content-Type": "text/plain" });
//   res.write("Hello , bro this is my first server");
//   res.end();
// });
// myServer.listen(port, hostName, () => {
//   console.log(`The server is runing at http://${hostName}:${port}`);
// });

const http = require("http");
const port = 3000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/plain" });
  res.write("Hello Bruh");
  res.end();
});

myServer.listen(port, hostName, () => {
  console.log(`Runing at http://${hostName}:${port}`);
});
