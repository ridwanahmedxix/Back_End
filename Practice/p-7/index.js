const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3500;

// DB CONNECTIONS

const connecDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/testDB");
    console.log("DB ID CONNECTED");
  } catch (error) {
    console.log("DB ID NOT CONNECTED");
    console.log(error);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("  welcome to the home page ");
});

app.listen(PORT, async () => {
  console.log(`The Server Is Runing At http://localhost:${PORT}`);
  await connecDB();
});
