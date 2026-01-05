const http = require("http");
const port = 3000;
const hostNmae = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text-html" });
  res.write(" <h1> Hello Everyone </h1> ");
  res.write(" <h1> This is Ridwan  </h1> ");
  res.write(" <h1> And I am a Full stack Web developer </h1> ");
  res.end();
});

myServer.listen(port, hostNmae, () => {
  console.log(`The server is Runing at http://${hostNmae}:${port}`);
});
