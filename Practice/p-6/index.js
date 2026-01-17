const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 2500;

//Multer Setup

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

app.get("/home", (req, res) => {
  res.status(200).send(" <h1> Welcome To The Home Page </h1> ");
});

app.listen(PORT, () => {
  console.log(`The Server Is Runing At http://localhost:${PORT}`);
});
