const { writeFile } = require("fs/promises");
const { createReadStream } = require("fs")

const createBigFile = async () => {
  await writeFile("./data/bigfile.txt", "hello world".repeat(100000))
}

createBigFile()

// const stream = createReadStream("./data/bigfile.txt", {
//   encoding: 'utf-8',
// })

// stream.on("data", (chunk) => {
//   console.log(chunk);
// })

// stream.on("end", () => {
//   console.log("ya termine de leer el archivo");
// })

// stream.on("error", (err) => {
//   console.error(err);
// })