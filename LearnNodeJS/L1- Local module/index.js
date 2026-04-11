// * node js bangla tutorial 3 : Module | Local module - exports, require

// ------- START ----------

const studentOne = require("./students");

console.log(studentOne.getName());
console.log(studentOne.getAge());
console.log(studentOne.getEmail());
console.log(studentOne.cgpa);

// * --------Method 2  Jei jei function dorkar sudu seta use korte parbo ------------

//  const { getName, cgpa } = require("./students");
// console.log(getName());
// console.log(cgpa);
