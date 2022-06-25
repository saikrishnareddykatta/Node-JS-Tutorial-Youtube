const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("../content/first.txt", "utf8");
    const second = await readFile("../content/second.txt", "utf8");
    await writeFile(
      "../content/async-pattern-result/promises-result.txt",
      `THIS IS USING PROMISES OF FILE SYSTEM MODULE: ${first} and ${second}`
    );
  } catch (error) {
    console.log(error);
  }
};

start();
