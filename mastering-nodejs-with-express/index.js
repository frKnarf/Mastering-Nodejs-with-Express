const fs = require("fs");

console.log("Hello Node.js");

console.log(global);
console.log(__dirname);
console.log(__filename);
console.log(module);
console.log(exports);
console.log(module.exports === exports);

const content = fs.readFileSync("./data.js", "utf-8");
console.log(content);

fs.readFile("./data.js", "utf-8", (err, content) => {
  console.log(content);
});
