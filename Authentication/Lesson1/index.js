require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route

app.get("/", (req, res) => {
  res.send(" <h1> Welcome To The Home Page </h1> ");
});

app.listen(process.env.PORT || 2900, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
