const express = require("express"); // import the Express module
const path = require("path"); // send a different
const app = express(); // create an Express application
const PORT = 3000; // define a port number
const POST = process.env.POST || 3000; // get port from environment variable or use default 3000

//SETUP STATIC FOLDER

// app.use(express.static(path.join(__dirname, "public"))); // serve static files from the "public" directory

// // basic routes
// app.get("/" , (req, res) => { // handle GET request to root URL (/ is the homepage)
//   res.sendFile(path.join(__dirname, "public", "index.html")); // send index.html file as response
// });

// app.get("/about", (req, res) => { // handle GET request to /about URL
//     res.sendFile(path.join(__dirname, "public", "about.html")); // send about.html file as response
// });
// start server

let posts = [
  { id: 1, title: 'post one'}, // array of post objects
   { id: 2, title: 'post two'}, // each post has an id and title
  { id: 3, title: 'post three'}, // add more posts as needed
];

//GET ALL POSTS
app.get ("/api/posts", (req,res) => { // handle GET request to /api/posts URL
  const limit =parseInt(req.query.limit); // get the limit of the query parameter 
    
  if(!isNaN(limit) && limit > 0 ){ // check if the limit is a positive number
    return res.json(posts.slice(0, limit));
  } else {
    return res.json(posts);
  }
});

//GET A SINGLE POST
app.get ("/api/posts/:id", (req,res) => { // handle GET request to /api/posts/:id URL
  const id = parseInt(req.params.id); // get the id parameter from the URL and convert it to an integer
  res.send(posts.filter(post => post.id === id)); // send posts array as JSON response
});
app.listen(POST, () => { // start the server and listen on the defined port
  console.log(`Server running at http://localhost:${POST}`); // log a message when the server is running
});

