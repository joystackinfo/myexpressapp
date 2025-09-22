const express = require("express"); // import the Express module
const path = require("path"); // send a different
const app = express(); // create an Express application
const PORT = 3000; // define a port number
const POST = process.env.POST || 3000; // get port from environment variable or use default 3000
const posts = require('./routes/posts'); // import posts route
const posts = require('./routes/posts'); // import posts route

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

//Routes
app.use('/api/posts' , posts); // use the posts router for routes starting with /api/posts

app.listen(POST, () => { // start the server and listen on the defined port
  console.log(`Server running at http://localhost:${POST}`); // log a message when the server is running
});

