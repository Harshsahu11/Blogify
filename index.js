const express = require("express");
const app = express();
const path = require("path");
const {connectDB} = require('./db/db');
const userRoute = require('./routes/user.router');
const cookieParser = require('cookie-parser');
const { checkAuth } = require("./middlewares/auth.middleware");

require("dotenv").config();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkAuth("token"));

app.use('/user',userRoute);

app.get("/", (req, res) => {
  res.render("Home",{
    user:req.user
  });
});

const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
    connectDB();
  console.log(`Server is running on ${PORT}`);
});
