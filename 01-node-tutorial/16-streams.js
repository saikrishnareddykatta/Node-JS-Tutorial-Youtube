const { createReadStream } = require("fs");

// the size of the file is 165 KB
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});

// default 64kb
// last buffer - remainder
// higWaterMark - control size
// const stream = createReadStream("./content/big.txt", { highWaterMark: 90000 });
// const stream = createReadStream("./content/big.txt", { encoding: 'utf8' });

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});
