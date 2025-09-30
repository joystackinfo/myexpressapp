const express = require("express");
//const path = require("path");
const app = express();
const posts = require('./routes/posts'); // import your posts router
const PORT = process.env.PORT || 8000;

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', posts);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

