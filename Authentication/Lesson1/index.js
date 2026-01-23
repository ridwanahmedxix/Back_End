require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user.model");
const PORT = process.env.PORT || 2900;
const dbURL = process.env.MONGO_ATLAS_URL;
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("MongoDB Atlas Is Connected");
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home Route

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

// Registar Route

app.post("/registar", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error.message);
  }
});
// Login Route

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user && user.password === password) {
      res.status(200).json({ status: "Valid user" });
    } else {
      console.log("User not Found Login ");
    }
  } catch (error) {
    res.status(500).json(error.message);
  }
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
