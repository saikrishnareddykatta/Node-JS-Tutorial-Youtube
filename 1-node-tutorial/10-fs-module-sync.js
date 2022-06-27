const { readFileSync, writeFileSync } = require("fs");
console.log("Start");

// reads data from file with 2 paramters, 1st being the path and
// 2nd being the decoding formt which is tuf-8 by default
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

//writing the data into file. If file name is not present, it creates a new file and adds data
//if a file is already present, then it overwrites old data with new data

writeFileSync(
  "./content/result-sync.txt",
  `The result being ${first} and ${second}`
);

//If we want the data to be appended without overwriting, we have to pass 3rd argument
writeFileSync(
  "./content/result-sync.txt",
  `The result being ${first} and ${second}`,
  { flag: "a" }
);
console.log("Done with this task");
console.log("Staring next task");
