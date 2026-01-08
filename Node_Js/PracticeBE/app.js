const express = require("express");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("This is a Home Page");
});

app.use((req, res) => {
  res.send("404 || Page Not Found");
});

module.exports = app;
