const express = require('express');
const path = require('path');

// Create Express server
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Root redirect
app.get('/', (req, res) => {
  res.redirect('https://cloudku.sbs');
});

// Define routes for each HTML file in the public directory
app.get('/addsewa', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addsewa.html'));
});

app.get('/perpanjangsewa', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'perpanjangsewa.html'));
});

app.get('/addlist', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'addlist.html'));
});

app.get('/dellist', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dellist.html'));
});

app.get('/setdone_changedone', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'setdone_changedone.html'));
});

app.get('/setlistview', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'setlistview.html'));
});

app.get('/setproses_changeproses', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'setproses_changeproses.html'));
});

app.get('/updatelist', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'updatelist.html'));
});

// Export the app for Vercel
module.exports = app;

// Start server only if this file is run directly (for local development)
if (require.main === module) {
  const port = process.env.PORT || 3003;
  app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
  });
}