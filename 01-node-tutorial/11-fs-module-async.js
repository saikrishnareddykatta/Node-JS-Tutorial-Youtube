const { readFile, writeFile } = require("fs");
console.log("Start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  // console.log(result);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // console.log(result);
  });
  const second = result;
  console.log("Done with this task");
  writeFile(
    "./content/result-async.txt",
    `${first} and ${second}`,
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      // console.log(result);
    }
  );
});
console.log("Staring next task");
