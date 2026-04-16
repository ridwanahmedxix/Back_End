const student = require("./index");
const http = require("http");
const PORT = 3200;
const localHost = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/html" });
  if (req.url === "/") {
    res.write(`
       <br />
    <h1>Welcome To My Server</h1>
    <br />
    <ul>
      <li>
        <a href="/name"> Name :  </a>
      </li>
      <br />
      <li>
        <a href="/age"> Age :  </a>
      </li>
      <br />
      <li>
        <a href="/email"> Email :  </a>
      </li>
     
    </ul>
      `);
    res.end();
  } else if (req.url === "/name") {
    res.write(`
     <h1>Name : ${student.getName()} </h1>
    <br />
    <a href="/"> Go Back </a>
      `);
    res.end();
  } else if (req.url === "/age") {
    res.write(`
     <h1>Name : ${student.getAge()} </h1>
    <br />
    <a href="/"> Go Back </a>
      `);
    res.end();
  } else if (req.url === "/email") {
    res.write(`
     <h1>Name : ${student.getEmail()} </h1>
    <br />
    <a href="/"> Go Back </a>
      `);
    res.end();
  }
});

myServer.listen(PORT, localHost, () => {
  console.log(`THE SERVER IS RUNING AT http://${localHost}:${PORT}`);
});
