const express = require("express");
const app = express();
const port = 3005;
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    name: "Ridwan Ahmed",
    age: 18,
  },

  {
    name: "Jannatin Naim",
    age: 22,
  },
  {
    name: "Aideed",
    age: 23,
  },
  {
    name: "Nusrat Jahan",
    age: 15,
  },
];

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
app.post("/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
});

app.use((req, res, next) => {
  res.status(404).json({
    message: ` <h2> Wrong URL </h2>  `,
  });
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
