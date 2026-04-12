const fs = require("fs");
fs.unlink("Demo2.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
