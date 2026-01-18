const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3500;

app.get("/", (req, res) => {
  res.send(" <h1>  Welcome To The Home Page </h1> ");
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
