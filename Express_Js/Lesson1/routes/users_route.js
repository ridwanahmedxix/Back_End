const express = require("express");

const router = express.Router();

router.get("/login", (req, res) => {
  res.send("This is a Login Page");
  res.end();
});

router.use("/cokie", (req, res) => {
  res.cookie("name", "Ridwan");
  res.cookie("age", "18");
  res.cookie("class", "11");
  res.end();
});

// router.get("/from", (req, res) => {
//   // res.status(200).json({
//   //   name: "Ridwan Ahmed",
//   //   message: "I am a Full stack Web developer",
//   //   statusCode: 200,
//   // });
//   res.redirect("/login");
// });

module.exports = router;
