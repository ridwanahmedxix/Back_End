require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
