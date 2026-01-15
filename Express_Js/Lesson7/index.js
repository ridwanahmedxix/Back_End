const express = require("express");
const app = express();
const PORT = 5500;

app.get("/registar", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});
app.get("/test", (req, res) => {
  res.status(200).send(" This a Test Api ");
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
