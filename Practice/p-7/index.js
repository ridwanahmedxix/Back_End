const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2500;

// Create Products Schema

const productsSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Products Model

// DB CONNECTIONS

const connectionDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
    console.log(" DB IS CONNECTED");
  } catch (error) {
    console.log(" DB IS NOT CONNECTED");
    console.log(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("WELCOME TO THE HOME PAGE ");
});

app.listen(PORT, async () => {
  console.log(`THE SERVER IS AT http:localhost:${PORT} `);
  await connectionDB();
});
