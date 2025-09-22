const express = require('express');
const router= express.Router(); // create a new router object

let posts = [
  { id: 1, title: 'post one'}, // array of post objects
   { id: 2, title: 'post two'}, // each post has an id and title
  { id: 3, title: 'post three'}, // add more posts as needed
];

//GET ALL POSTS
router.get ("/", (req,res) => { // handle GET request to /api/posts URL
  const limit =parseInt(req.query.limit); // get the limit of the query parameter 
    
  if(!isNaN(limit) && limit > 0 ){ // check if the limit is a positive number
    return res.status(200).json(posts.slice(0, limit)); // send the first 'limit' number of posts as JSON response
  } else {
    return res.status(200).json(posts); // send all posts as JSON response
  }
});

//GET A SINGLE POST
router.get ("/:id", (req,res) => { // handle GET request to /api/posts/:id URL
  const id = parseInt(req.params.id); // get the id parameter from the URL and convert it to an integer
  const post = posts.find(post => post.id === id); // find the post with the matching id
  if (post) {
    return res.status(200).json(post);
  } else {
    return res.status(404).json({ message: "Post not found" });
  }
});


module.exports = router; // export the router object to be used in other files