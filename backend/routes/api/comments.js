/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /post/:postId
    * Retrieves all comments for a specific post.
    *
    * @param {string} req.params.postId - The ID of the post to fetch comments for.
    * @returns {Object[]} 200 - Array of comment objects sorted by creation date (descending).
    * @returns {Object} 500 - Error message if fetching comments fails.
    */

 /**
    * POST /post/:postId
    * Adds a new comment to a specific post.
    *
    * @param {string} req.params.postId - The ID of the post to add a comment to.
    * @param {string} req.body.content - The content of the comment.
    * @param {string} req.body.author - The author of the comment.
    * @returns {Object} 201 - The newly created comment object.
    * @returns {Object} 400 - Error message if content or author is missing.
    * @returns {Object} 500 - Error message if adding comment fails.
    */

 /**
    * DELETE /:commentId
    * Deletes a specific comment by its ID.
    *
    * @param {string} req.params.commentId - The ID of the comment to delete.
    * @returns {Object} 200 - Success message if comment is deleted.
    * @returns {Object} 404 - Error message if comment is not found.
    * @returns {Object} 500 - Error message if deleting comment fails.
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;


// Get comments for a specific post
router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ post: req.params.postId }).sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// Add a new comment to a post
router.post("/post/:postId", async (req, res) => {
  const { content, author } = req.body;
  if (!content || !author) {
    return res.status(400).json({ error: "Content and author are required" });
  }

  try {
    const newComment = new Comment({
      post: req.params.postId,
      content,
      author,
      createdAt: new Date(),
    });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res .status(500).json({ error: "Failed to add comment" });
  }
});

// add another endpoint to delete a comment
router.delete("/:commentId", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.commentId);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});