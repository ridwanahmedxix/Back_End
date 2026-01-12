const express = require("express");
const app = express();
const port = 3005;

const htmlForm = ` 
    <form action="/user" method="post" >
      <input type="text" name="name" placeholder="Enter Name" />
      <input type="number" name="age" placeholder="Enter Age" />
      <button type="submit">Save User</button>
    </form>
`;

app.get("/user", (req, res) => {
  res.send(htmlForm);
});

app.use((req, res, next) => {
  res.status(404).json({
    message: ` <h2> Wrong URL </h2>  `,
  });
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
