// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// add any necessary code you'd want to!
const path = require("path");

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect('https://github.com/kzstt/flashflood');
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect('https://github.com/skeletoboy/typesetting-HW');
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect('https://github.com/skeletoboy/four-sorting-algo-HW');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});