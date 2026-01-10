const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2345;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/circle", (req, res) => {
  res.sendFile(__dirname + "/circle.html");
});

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname + "/triangle.html");
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
