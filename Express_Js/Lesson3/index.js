const express = require("express");
const app = express();
const port = 2005;

app.get("/products/:id([0-9]+)", (req, res) => {
  res.send(`<h2> ID = ${req.params.id} </h2> `);
});
app.use("*", (req, res) => {
  res.status(404).send({
    message: "404 Npt Found",
  });
});
app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
