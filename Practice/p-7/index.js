const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3500;

// DB CONNECTIONS

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

app.get("/", (req, res) => {
  res.send(" <h1>  Welcome To The Home Page </h1> ");
});

app.listen(PORT, async () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
  await connectDB();
});
