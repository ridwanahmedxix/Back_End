const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 5500;

app.get("/home", (req, res) => {
  res.status(200).send(" Welcome To The Home Pag ");
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
