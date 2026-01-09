const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3003;
const hostName = "127.0.0.1";

app.use(bodyParser.json());

app.post("/user", (req, res) => {
  const { name, id, age } = req.body;
  res.send(`The name : ${name} and the id ${id} and the age ${age} `);
});

app.listen(port, hostName, () => {
  console.log(`The server is runing at http://${hostName}:${port}`);
});
