const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3008;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
