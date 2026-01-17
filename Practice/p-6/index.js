const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 2500;

app.get("/registar", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.get("/home", (req, res) => {
  res.status(200).send(" <h1> Welcome To The Home Page </h1> ");
});

app.listen(PORT, () => {
  console.log(`The Server Is Runing At http://localhost:${PORT}`);
});
