require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const { connectDB } = require("./db/db");
const userRoute = require("./routes/user.router");
const cookieParser = require("cookie-parser");
const { checkAuth } = require("./middlewares/auth.middleware");
const blogRoute = require("./routes/blog.router");

const Blog = require("./models/blog.model");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkAuth("token"));
app.use(express.static(path.resolve('./public')));

app.use("/user", userRoute);
app.use("/blog", blogRoute);

app.get("/", async (req, res) => {
  const allBlogs = await Blog.find({});
  res.render("Home", {
    user: req.user,
    blogs: allBlogs,
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on ${PORT}`);
});
