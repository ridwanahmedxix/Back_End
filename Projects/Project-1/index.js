const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/registar", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/registar", (req, res) => {
  const { email, password } = req.body;
  res.send(
    ` <h1> Your Email : ${email} </br> Your Password : ${password} </h1>  `
  );
});

app.listen(port, () => {
  console.log(`The server is runing at http://localhost:${port}`);
});
