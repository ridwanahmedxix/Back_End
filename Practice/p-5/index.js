const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 6000;

app.get("/home", (req, res) => {
  res.send("Welcome To Home Page");
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
