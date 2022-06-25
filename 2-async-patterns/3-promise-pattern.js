const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

const writeText = (path, first, second) => {
  return new Promise((resolve, reject) => {
    writeFile(path, `${first} and ${second}`, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

// getText("../content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// getText("../content/second.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

getText("../content/first.txt")
  .then((result) => {
    const first = result;
    getText("../content/second.txt")
      .then((result) => {
        const second = result;
        console.log(`${first} and ${second}`);
        writeText("../content/promise-result.txt", first, second)
          .then((result) => console.log(result))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
