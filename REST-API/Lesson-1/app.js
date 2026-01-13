const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home Route

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Error Handler

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 Page Not Found",
  });
});

module.exports = app;
