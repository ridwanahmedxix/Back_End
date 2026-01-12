const express = require("express");
const app = express();
const port = 3005;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`The server is runing at http://localhost:${port}`);
});
