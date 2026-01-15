const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res, next) => {
  res.status(404).send("404 || PAGE NOT FOUND ");
});
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "The Server Is Not Found",
  });
});

module.exports = app;
