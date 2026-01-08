const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(` Welcome ${name} and your Age ${age} `);
});

app.listen(port, () => {
  console.log(`The server is runing at http://localhost:${port}`);
});
