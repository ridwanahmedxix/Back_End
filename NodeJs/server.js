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
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hello my friends , this is my first server .");
});

myServer.listen(port, hostName, () => {
  console.log(`The server is runing at http://${hostName}:${port}`);
});
