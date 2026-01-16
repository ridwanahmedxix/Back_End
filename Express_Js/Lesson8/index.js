const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const app = express();
const PORT = 5500;

// Conection To DB

const conectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/userTestDB");
    console.log(" DB Is Connected");
  } catch (error) {
    console.log(" DB Is Not Connected");
    console.log(error);
    process.exit(1);
  }
};

// Multer - File Upload

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

app.get("/registar", (req, res) => {
  res.status(200).sendFile(__dirname + "/index.html");
});

app.post("/registar", upload.single("image"), (req, res) => {
  res.status(200).send("File Is Uploaded");
});

app.get("/test", (req, res) => {
  res.status(200).send(" This a Test Api ");
});

app.listen(PORT, async () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
  await conectDB();
});
