const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2900;

// Create Products Schema

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: Number,
  description: String,
  createAt: {
    type: Date,
    default: Date.now,
  },
});

// Create Products Model

const product = mongoose.model("Products", productsSchema);

// DB CONNECTIONS

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
    console.log("DB IS CONNECTED ");
  } catch (error) {
    console.log("DB IS NOT CONNECTED ");
    console.log(error);
    process.exit(1);
  }
};

// Home Route
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.listen(PORT, async () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
  await connectDB();
});
