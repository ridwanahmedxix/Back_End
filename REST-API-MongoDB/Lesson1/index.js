const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.post("/home", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  console.log(`Your Name Is : ${name} And Your Password : ${password} `);
  res.sendFile(path.join(__dirname + "/views/home.html"));
});
// app.post("/home", (req, res) => {
//   res.sendFile(path.join(__dirname + "/views/home.html"));
// });

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
