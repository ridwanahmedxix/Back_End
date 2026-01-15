require("dotenv").config();

const app = require("./app");

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
