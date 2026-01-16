const express = require("express");
const multer = require("multer");
const app = express();
const PORT = 4000;

//Multer Image Upload Code -

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
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
  res.status(200).send("Image Is Uploaded");
});

app.get("/home", (req, res) => {
  res.status(200).send("Welcome To Home Page");
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNING AT http://localhost:${PORT}`);
});
