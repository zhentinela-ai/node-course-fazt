const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  const fileStream = createReadStream("./data/bigfile.txt", {
    encoding: "utf-8",
  });
  fileStream.on("data", (chunk) => {
    fileStream.pipe(res);
  });
  fileStream.on("error", (err) => console.error(err));
});

server.listen(3000);
console.log(`Server on port ${3000}`);
