const Blog = require("../models/blog.model");

async function handleBlog(req, res) {
  try {
    const { title, body } = req.body;
    const blog = await Blog.create({
      title,
      body,
      createdBy: req.user._id,
      coverImage: `/uploads/${req.file.filename}`,
    });
    return res.redirect(`/`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error creating blog");
  }
}

async function getBlog(req,res){
  const blog = await Blog.findById(req.params.id);
  return res.render('blog',{
    user:req.user,
    blog
  })
}

module.exports = {
  handleBlog,
  getBlog
};