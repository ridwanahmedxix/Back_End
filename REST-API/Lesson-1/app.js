const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/user.route");
const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/users", userRouter);

// Home Route

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Error Handler - Route

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 Page Not Found",
  });
});
// Error Handler - Server

app.use((err, req, res, next) => {
  res.status(500).json({
    message: "500 Something Broke ",
  });
});

module.exports = app;
