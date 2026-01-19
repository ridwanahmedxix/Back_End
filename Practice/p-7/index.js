const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2700;

app.get("/", (req, res) => {
  res.status(200).sendFile();
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
