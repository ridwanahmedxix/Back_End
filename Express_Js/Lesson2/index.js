const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  const id = req.query.id;
  res.send(`Student Id Is : ${id}`);
});

app.listen(port, () => {
  console.log(`Server is runing at http://localhost:${port}`);
});
