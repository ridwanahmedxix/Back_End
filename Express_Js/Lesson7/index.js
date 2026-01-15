const express = require("express");
const app = express();
const PORT = 5500;

app.get("/", (req, res) => {
  res.send("Welcome To Our Company");
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
