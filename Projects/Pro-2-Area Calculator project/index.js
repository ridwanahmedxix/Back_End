const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3008;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.post("/circle", (req, res) => {
  const radius = req.body.radius;

  const area = Math.PI * radius * radius;
  res.send(` <h2> Area Of Circle : ${area}  </h2>  `);
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;

  const area = 0.5 * base * height;
  res.send(` <h2> Area Of Triangle : ${area}  </h2>  `);
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
