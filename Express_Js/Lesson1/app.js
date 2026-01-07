const express = require("express");
const path = require("path");
const UserRouter = require("./routes/users_route");
const app = express();

app.use("/api/user", UserRouter);

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use((req, res) => {
  res.send(" <h1> 404 !! Page Not Found </h1> ");
});

module.exports = app;
