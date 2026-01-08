const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  const { id, name } = req.query;
  res.send(`<h1> Student Name Is : ${name} , And Id Is : ${id} </h1> `);
});

app.listen(port, () => {
  console.log(`Server is runing at http://localhost:${port}`);
});
