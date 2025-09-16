const express = require("express");
const app = express(); // create an Express application
const PORT = 3000; // define a port number

// basic route
app.get("/" , (req, res) => { // handle GET request to root URL (/ is the homepage)
  res.send("Hello, Express! 🚀 i am learning express"); // send a response
});

app.get("/about", (req, res) => { // handle GET request to /about URL
    res.send("This is about the web page");
});
// start server
app.listen(PORT, () => { // start the server and listen on the defined port
  console.log(`Server running at http://localhost:${PORT}`); // log a message when the server is running
});
