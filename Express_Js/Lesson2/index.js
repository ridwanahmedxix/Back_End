const express = require("express");
const app = express();
const port = 3009;

app.get("/", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");

  res.send(`The id is : ${id} and nami is : ${name}`);
});

app.listen(port, () => {
  console.log(`The server is runing at http://localhost:${port}`);
});
