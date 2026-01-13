const app = require("./app");

const port = 4500;
app.listen(port, () => {
  console.log(`The Server Is Runing At http://localhost:${port}`);
});
