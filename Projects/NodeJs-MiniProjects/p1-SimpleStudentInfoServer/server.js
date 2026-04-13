const http = require("http");
const PORT = 2900;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/htl" });
  if (req.url === "/") {
    res.end(`   
    <h1>Welcome To My Server</h1>
    <br />
    <a href="/name"> Name </a> <br />
    <a href="/age"> Age </a>
    <a href="/email"> Email </a> 
    `);
  }
});

myServer.listen(PORT, localHost, () => {
  console.log(`THE SERVER IS RUNING AT http://${localHost}:${PORT}`);
});
