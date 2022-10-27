const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/*', (req, res) => {
  const html = path.join(__dirname, '..', 'public/index.html');
  res.sendFile(html);
});

module.exports = app;
