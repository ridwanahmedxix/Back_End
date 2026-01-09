const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/registar", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/registar", (req, res) => {
  const { fullName, email } = req.body;
  res.send(`Welcome ${fullName} and Your Email ${email} `);
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
