const express = require("express");
const app = express();
const path = require("path");
const {connectDB} = require('./db/db');

require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("Home");
});

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on ${PORT}`);
});
