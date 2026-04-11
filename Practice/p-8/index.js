const fs = require("fs");

fs.unlink("Items.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
  }
});
