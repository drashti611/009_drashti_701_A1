const fs = require("fs");
const zlib = require("zlib");

const compressedFile = "../que4/example.txt.gz";
const decompressedFile = "example_unzipfile.txt";

const input = fs.createReadStream(compressedFile);
const output = fs.createWriteStream(decompressedFile);

input.pipe(zlib.createGunzip()).pipe(output);

output.on("finish", () => {
  console.log(`Decompressed ${compressedFile} => ${decompressedFile}`);
});
