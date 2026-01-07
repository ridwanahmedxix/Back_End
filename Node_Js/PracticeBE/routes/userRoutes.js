const express = require("express");
const router = express.Router();

router.get("/registar", (req, res) => {
  res.send("This ia a Registar Page");
});

router.get("/login", (req, res) => {
  res.send("This is a Login Page");
});

module.exports = router;
