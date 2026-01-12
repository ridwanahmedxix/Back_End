const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();
const port = 3005;
app.use(userRouter);
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.status(404).json({
    message: ` <h2> Wrong URL </h2>  `,
  });
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
