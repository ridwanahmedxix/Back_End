const express = require("express");
const app = express();
const port = 5000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // যদি JSON data পাঠাও

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});
app.post("/home", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  // console.log(`Your Name Is : ${name} And Your Password : ${password} `);
  res.sendFile(path.join(__dirname + "/views/home.html"));
});

app.post("/info", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  res.send(`
    
    <h1> Your Name : ${name}  . </h1>  <br>
    <h1> Your Password : ${password}  . </h1>  
     
    <form action="/home" method="post">
      <button type="submit">Next</button>
    </form>
    `);
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
