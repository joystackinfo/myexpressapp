const express = require("express"); // import the Express module
const path = require("path"); // 
const app = express(); // create an Express application
const PORT = 3000; // define a port number

//SETUP STATIC FOLDER

app.use(express.static(path.join(__dirname, "public"))); // serve static files from the "public" directory

// // basic route
// app.get("/" , (req, res) => { // handle GET request to root URL (/ is the homepage)
//   res.sendFile(path.join(__dirname, "public", "index.html")); // send index.html file as response
// });

// app.get("/about", (req, res) => { // handle GET request to /about URL
//     res.sendFile(path.join(__dirname, "public", "about.html")); // send about.html file as response
// });
// start server
app.listen(PORT, () => { // start the server and listen on the defined port
  console.log(`Server running at http://localhost:${PORT}`); // log a message when the server is running
});

