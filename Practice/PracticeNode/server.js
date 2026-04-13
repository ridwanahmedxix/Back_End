const student = require("./index");
const http = require("http");
const PORT = 2700;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  if (req.url === "/") {
    res.end(`
   <h1>Welcom to my server</h1>
    <a href="/home"> Home </a>
    <a href="/age"> Age </a>
    <a href="/email"> Email </a>
     `);
  }
});

myServer.listen(PORT, localHost, () => {
  console.log(` THE SERVER IS RUNING AT http://${localHost}:${PORT} `);
});
