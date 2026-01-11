const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3007;

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
  const Area = Math.PI * radius * radius;
  res.send(` <h2> The Area Of Circle : ${Area} </h2>  `);
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});
app.post("/triangle", (req, res) => {
  const base = req.body.base;
  const height = req.body.height;
  const Area = 0.5 * base * height;
  res.send(` <h2> The Area Of Triangle : ${Area} </h2>  `);
});

app.listen(port, () => {
  console.log(`The server is runing at http://localhost:${port}`);
});
