const express = require("express");
const path = require("path");
const app = express();
const posts = require('./routes/posts');
const PORT = process.env.PORT || 3000;

// Body parser middleware (put these BEFORE routes)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', posts);


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

