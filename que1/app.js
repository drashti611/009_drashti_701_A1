const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/gethello", (req, res) => {
  res.send("hello nodejs...");
});
app.listen(5000);
