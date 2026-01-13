const express = require("express");
const userRouter = require("./routes/userRoutes");
const productRouter = require("./routes/productsRoutes");

const app = express();
const port = 3005;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.use(userRouter);
app.use(productRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    message: "Wrong URL",
  });
});

app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
