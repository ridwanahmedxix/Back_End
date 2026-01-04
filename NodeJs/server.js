const http = require("http");
const port = 3000;
const hostNmae = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("Hello , I am your first server");
});

myServer.listen(port, hostNmae, () => {
  console.log(`our server is runing successful at http://${hostNmae}:${port} `);
});
