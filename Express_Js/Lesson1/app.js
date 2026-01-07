const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(" |get| I am a get request at home route");
  res.end();
});

app.post("/", (req, res) => {
  res.send(" |post|  How are you ? I Hope you are fine .");
  res.end();
});

app.put("/", (req, res) => {
  res.send(" |put| This is a Put mama  ");
  res.end();
});
app.delete("/", (req, res) => {
  res.send(" |Delete| This is - Delete kor taratari  ");
  res.end();
});

module.exports = app;
