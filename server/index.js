const express = require("express");
const app = express();
const port = 5055;
const path = require("path");
app.use(express.static(path.join(__dirname, "..", "build")));
app.listen(port, () => {
  console.log(`server is listen on port ${port}`);
});
