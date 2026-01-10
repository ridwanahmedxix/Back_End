const express = require("express");
const app = express();
const port = 3008;

const myMiddleWare = (req, res, next) => {
  console.log("Middle Ware Function");
  req.currentTime = new Date(Date.now());
  next();
};

app.get("/", myMiddleWare, (req, res) => {
  console.log(" My name is Home" + req.currentTime);
  res.send(` <h1> Hello , I am Home Route </h1>  `);
});
app.use((req, res, next) => {
  res.send("404 || Page not found");
});

app.listen(port, () => {
  console.log(`The server is runing at http://localhost:${port}`);
});
