const express = require("express");
const { handleBlog, getBlog } = require("../controllers/blog.controller");
const upload = require("../services/storage");
const router = express.Router();

router.get("/add-new", (req, res) => {
  return res.render("AddBlog", {
    user: req.user,
  });
});

router.get('/:id',getBlog);

router.post("/", upload.single("coverImage"), handleBlog);

module.exports = router;
