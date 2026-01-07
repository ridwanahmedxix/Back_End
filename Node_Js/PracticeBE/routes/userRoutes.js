const express = require("express");
const router = express.Router();

router.get("/about", (req, res) => {
  res.send("This is a About Page");
  res.end();
});

router.get("/contact", (req, res) => {
  res.send("This is a Contact Page");
  res.end();
});

module.exports = router;
