const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
let savage = {
  age: 28,
  birthName: "Sheya Bin Abraham Josheph",
  birthLocation: "London, England",
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/savage", (req, res) => {
  res.json(savage);
});

app.listen(3000, () => {
  console.log("Listening to Port 3000...");
});
