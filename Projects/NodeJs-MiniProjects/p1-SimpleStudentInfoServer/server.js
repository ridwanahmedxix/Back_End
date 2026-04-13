const student = require("./index");

const http = require("http");
const PORT = 2900;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  if (req.url === "/") {
    res.end(`   
    <h1>Welcome To My Server</h1>
    <br />
    <a href="/name"> Name </a> <br />
    <a href="/age"> Age </a> <br/>
    <a href="/email"> Email </a> 
    `);
  } else if (req.url === "/name") {
    res.end(`
        <h1> Name : ${student.getName()} </h1>
        <br/>
         <a href="/">Go Back</a>
        `);
  } else if (req.url === "/age") {
    res.end(`
        <h1> Age : ${student.getAge()} </h1>
        <a href="/"> Go Back </a>
    `);
  } else if (req.url === "/email") {
    res.end(`
         <h1> Age : ${student.getEmail()} </h1>
        <a href="/"> Go Back </a>
        `);
  }
});

myServer.listen(PORT, localHost, () => {
  console.log(`THE SERVER IS RUNING AT http://${localHost}:${PORT}`);
});
