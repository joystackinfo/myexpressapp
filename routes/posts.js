const express = require('express');
const router = express.Router();

// Sample posts array
let posts = [
  { id: 1, title: 'post one' },
  { id: 2, title: 'post two' },
  { id: 3, title: 'post three' },
];

// GET ALL POSTS
router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);
  
  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  } else {
    return res.status(200).json(posts);
  }
});

// GET A SINGLE POST
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (post) {
    return res.status(200).json(post);
  } else {
    return res.status(404).json({ message: "Post not found" });
  }
});

// POST A NEW POST (logs body only)
router.post("/", (req, res) => {
  console.log("Received body:", req.body); // logs whatever is sent

  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };
  if (!newPost.title) {
    return res.status(400).json({msg: "please involve a title"});
  }
  posts.push(newPost);
  res.status(201).json(posts);
});

module.exports = router;
