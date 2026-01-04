// const http = require("http");
// const port = 3000;
// const hostNmae = "127.0.0.1";

// const myServer = http.createServer((req, res) => {
//   res.end("Hello , This is my First Server ");
// });
// myServer.listen(port, hostNmae, () => {
//   console.log(`The server is running at http://${hostNmae}:${port}`);
// });

const http = require("http");
const port = 3000;
const hostNmae = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end(" <h1> Hello , This is my First Server </h1> ");
});

myServer.listen(port, hostNmae, () => {
  console.log(`The server is runing at http://${hostNmae}:${port}`);
});
