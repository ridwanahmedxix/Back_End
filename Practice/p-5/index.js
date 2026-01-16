const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 4500;

app.get("/home", (req, res) => {
  res.status(200).send("Welcome To The Home Page");
});

app.listen(PORT, () => {
  console.log(`The server is runing at http://localhost:${PORT}`);
});
