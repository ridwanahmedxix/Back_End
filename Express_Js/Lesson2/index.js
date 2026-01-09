const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/contact", (req, res) => {
  const { fullName, age, id } = req.body;
  res.send(`Welcome ${fullName} , Your Age : ${age} and Your Id: ${id} `);
});

app.listen(port, () => {
  console.log(`The server is runing at http://localhost:${port}`);
});
