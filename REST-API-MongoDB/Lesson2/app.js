const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/users.route");
const app = express();

// Middlewares for CORS and parsing incoming form & JSON data
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Error Handler - Route Error
app.use((req, res, next) => {
  res.status(404).send("404 || PAGE NOT FOUND ");
});

// Error Handler - Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "The Server Is Not Found",
  });
});

module.exports = app;
