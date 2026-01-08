const express = require("express");
const app = express();
const port = 3004;

app.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");

  res.send(`The Id Is : ${id} , The Nmae Is : ${name}`);
});

app.listen(port, () => {
  console.log(`The Server is runing at http://localhost:${port}`);
});
