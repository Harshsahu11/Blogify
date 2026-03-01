const Comment = require("../models/comment.model");

async function handleComment(req, res) {
  try {
    const { content } = req.body;
    const { blogId } = req.params;

    if (!blogId) {
      return res.status(400).send("Blog ID missing");
    }

    await Comment.create({
      content,
      blogId,
      createdBy: req.user._id,
    });

    return res.redirect(`/blog/${blogId}`);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error adding comment");
  }
}

module.exports = { handleComment };