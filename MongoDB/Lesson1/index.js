const express = require("express");
const app = express();
const PORT = 2500;

app.get("/", (req, res) => {
  res.send(" <h1> Welcome To The Home Page </h1> ");
});

app.listen(PORT, () => {
  console.log(`The Server Is Runing At http://localhost:${PORT}`);
});
