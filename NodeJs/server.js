// const randomFruitsName = require("random-fruits-name");
// console.log(randomFruitsName("en"));

// const randomSong = require("song-object-generator");
// console.log(randomSong());

const http = require("http");
const port = 3000;
const hostNmae = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/plain" });
  res.write("Hello , this is my first server");
  res.end();
});

myServer.listen(port, hostNmae, () => {
  console.log(`The server is runing at http://${hostNmae}:${port}`);
});
