const express = require("express");
const getData = require("./data/home.js");
const port = 4000;
const app = express();

app.use("/images", express.static("images"));

app.get("/home", (req, res) => {
  res.status(200).send(getData(req));
});

app.listen(port, () => console.log("server running... "));
