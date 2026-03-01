const Blog = require("../models/blog.model");

async function handleBlog(req, res) {
  try {
    const { title, body } = req.body;
    const blog = await Blog.create({
      title,
      body,
      createdBy: req.user._id,
      coverImage: `/uploads/${req.user._id}/${req.file.filename}`,
    });
    return res.redirect(`/blog/${blog._id}`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error creating blog");
  }
}

module.exports = {
  handleBlog,
};