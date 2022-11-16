// require configuration
require('dotenv').config();

const express = require('express');
const mailer = require('./api');
const path = require('path');
const app = express();

/* parsing json data */
app.use(express.json());

/* middleware for serving static files */
app.use(express.static(path.join(__dirname, '..', 'public')));

/* POST route for contact form - email */
app.post('/api/contact', (req, res, next) => {
  try {
    mailer(req.body);
    res.sendStatus(200);
  } catch(ex) {
    next(ex);
  }
});

/* route for sending the index file */
app.get('/', (req, res) => {
  const html = path.join(__dirname, '..', 'public/index.html');
  res.sendFile(html);
});

app.use('*', (req, res) => {
  const html = path.join(__dirname, '..', 'public/index.html');
  res.sendFile(html);
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'internal server error');
});

module.exports = app;
