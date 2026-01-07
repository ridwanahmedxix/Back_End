const express = require("express");
const UserRouter = require("./routes/users_route");
const path = require("path");
const app = express();

app.use("/api/user", UserRouter);

app.use("/", (req, res) => {
  res.send("This is a Home Page");
  res.end();
});

app.use((req, res) => {
  res.send(" <h1> 404 !! Page Not Found </h1> ");
});

module.exports = app;
