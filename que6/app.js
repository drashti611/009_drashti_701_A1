const fs = require("fs");
const util = require("util");

const unlinkAsync = util.promisify(fs.unlink);

async function deleteFile(filePath) {
  try {
    await unlinkAsync(filePath);
    console.log(`file deleted : ${filePath}`);
  } catch (err) {
    console.log(`Error deleting file:`, err.message);
  }
}
const filetoDelete = "text.txt";

deleteFile(filetoDelete);
