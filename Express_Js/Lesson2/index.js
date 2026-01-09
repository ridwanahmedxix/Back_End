const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3003;
const hostName = "127.0.0.1";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/registar", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/registar", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`Welcome ${fullName} and your Age: ${age} `);
});

app.listen(port, hostName, () => {
  console.log(`The server is runing at http://${hostName}:${port}`);
});
