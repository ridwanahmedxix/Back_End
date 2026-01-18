const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 2500;

// Create Product Schema
const productsSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   // required: true,
  // },
  title: String,
  price: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
// Create Product Model

const product = mongoose.model("Products", productsSchema);

// DB Connections

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
    console.log("DB Is Connected");
  } catch (error) {
    console.log("DB Is Not Connected");
    console.log(error);
    process.exit(1);
  }
};

// Home Route
app.get("/", (req, res) => {
  res.send(" <h1> Welcome To The Home Page </h1> ");
});

app.listen(PORT, async () => {
  console.log(`The Server Is Runing At http://localhost:${PORT}`);
  await connectDB();
});
