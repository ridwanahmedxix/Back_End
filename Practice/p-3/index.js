const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRouter);

app.use((req, res) => {
  res.status(404).json({
    message: "Wrong URL",
  });
});
app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
