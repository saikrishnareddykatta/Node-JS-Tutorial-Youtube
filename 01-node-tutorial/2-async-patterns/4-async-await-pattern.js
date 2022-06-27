const { readFile, writeFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

const writeText = (path, first, second) => {
  return new Promise((resolve, reject) => {
    writeFile(path, `${first} and ${second}`, (err, res) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(res);
    });
  });
};

const start = async () => {
  try {
    const first = await getText("../content/first.txt");
    const second = await getText("../content/second.txt");
    const writeData = await writeText(
      "../content/async-pattern-result/async-await-result.txt",
      first,
      second
    );
    console.log(`${first} and ${second}`);
  } catch (err) {
    console.log(err);
  }
};

start();
