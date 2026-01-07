const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use("/api/user/", userRoutes);

app.use("/", (req, res) => {
  res.send("This is a Home Page");
  res.end();
});

app.use((req, res) => {
  res.send(" <h1> 404 || Page Not Found </h1> ");
});

module.exports = app;
