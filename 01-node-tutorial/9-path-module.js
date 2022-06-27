const path = require("path");
//separator property returns platform specific separator
console.log(path.sep);
// method which joins a seqeuence of path segments using that paltform specific seperator as delimiter
// and it returns a nomralized resulting path
const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);
const filePathWithSep = path.join(
  `${path.sep}content`,
  "subfolder",
  "test.txt"
);
console.log(filePathWithSep);

//method to get to end file of the filepath using path
const base = path.basename(filePath);
console.log(base);

//method that returns an absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
