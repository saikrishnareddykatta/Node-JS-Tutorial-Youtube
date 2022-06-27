const http = require("http");
const { createReadStream, readFile } = require("fs");

const server = http.createServer((req, res) => {
  //   const data = readFile("./content/big.txt", (err, result) => {
  //     res.end(result);
  //   });
  const fileStream = createReadStream("./content/big.txt");
  // open event is emitted when <fs.WriteStream> is opened
  // pipe() method is used to push the readStream into writeStream
  // under the hood response object is set up as writeable stream in pipe() method
  // hence instead of transfer the whole file, we transferring data in chunks
  fileStream.on("open", () => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(5000);
