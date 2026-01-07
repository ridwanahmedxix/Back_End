const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();

app.use("/api/user", userRouter);
app.use("/", (req, res) => {
  res.send("This is a Home Page");
});

app.use((req, res) => {
  res.send("404 || Error - Page Not Found");
});

module.exports = app;
