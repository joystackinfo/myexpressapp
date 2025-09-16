const express = require("express");
const app = express();
const PORT = 3000;

// basic route
app.get("/", (req, res) => {
  res.send("Hello, Express! 🚀");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
