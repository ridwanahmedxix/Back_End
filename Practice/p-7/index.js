const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3800;

app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
