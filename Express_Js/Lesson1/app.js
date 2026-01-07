const express = require("express");
const path = require("path");
const app = express();

app.get("/contact", (req, res) => {
  res.send("My Facebook id name - Ridwan Ahmed ");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

module.exports = app;
