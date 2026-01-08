const express = require("express");
const app = express();
const port = 3004;

app.get("/", (req, res) => {
  const { id, name } = req.query;
  res.send(`Student Name Is : ${name} , And Id Is : ${id}`);
});

app.listen(port, () => {
  console.log(`The Server is runing at http://localhost:${port}`);
});
