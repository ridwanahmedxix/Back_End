// ---------- PART - 1 ------------------

// const http = require("http");
// const PORT = 1900;
// const localHost = "127.0.0.1";

// const myServer = http.createServer((req, res) => {
//   res.writeHead(202, { "Content-Type": "text/plain" });
//   res.write("Hello world");
//   res.end();
// });

// myServer.listen(PORT, localHost, () => {
//   console.log(`The Server Is Runing At http://${localHost}:${PORT}`);
// });

// ---------- PART - 2 ------------------
// "Content-Type": "text/html"

const http = require("http");
const PORT = 1900;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  res.write(" <h1> Hello world </h1>  ");
  res.write(" <h1> Hello Everyone </h1>  ");
  res.end();
});

myServer.listen(PORT, localHost, () => {
  console.log(`The Server Is Runing At http://${localHost}:${PORT}`);
});
