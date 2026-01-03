const fs = require("fs");
fs.unlink("about.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Successful");
    // console.log(data);
  }
});
//
