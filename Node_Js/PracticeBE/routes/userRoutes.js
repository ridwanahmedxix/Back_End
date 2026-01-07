const express = require("express");
const router = express.Router();

router.get("/registar", (req, res) => {
  res.send("This is a Registar Page");
});

router.get("/login", (req, res) => {
  res.send("This is a Login page");
});

module.exports = router;
