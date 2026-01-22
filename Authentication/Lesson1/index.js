require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 2900;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// Registar Route

app.post("/registar", (req, res) => {
  res.status(201).json({
    message: "This is a Registar Route",
  });
});
// Login Route

app.post("/login", (req, res) => {
  res.status(200).json({
    message: "User is Login",
  });
});

// Route not found

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found",
  });
});

// Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something Broke",
  });
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
