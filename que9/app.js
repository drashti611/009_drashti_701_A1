const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "text.txt");

//1.add a data to a new file
fs.writeFile(filePath, "hello,this is a same file..\n", (err) => {
  if (err) return console.error("write error:", err);
  console.log("file written successfully..");

  //2. append data to the file
  fs.appendFile(filePath, "Appending more text.\n", (err) => {
    if (err) return console.log("append error:", err);
    console.log("appending data successfully...");

    //3. read the file content
   fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) return console.error("Read error:", err);
  console.log("file content:\n", data);

  const newFilePath = path.join(__dirname, "renamed_text.txt");
  fs.rename(filePath, newFilePath, (err) => {
    if (err) return console.log("rename error", err);
    console.log("file renamed...");
  });
});

  });
});
