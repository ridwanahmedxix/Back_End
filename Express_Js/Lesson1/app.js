const express = require("express");
const path = require("path");
const app = express();

app.get("/contact", (req, res) => {
  res.send("my email address - example@gmail.com");
  res.end();
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app;
