'use strict';

// Dependencies
const express = require('express');

// Port
const port = process.env.PORT || 3000;

// Routes
const routes = require('./app/routes/resume');

// Express
const app = express();

// Middelware
require('./app/middelware/basic')(app);
app.use('/', routes);

// Connection to server
app.listen(port, (err) => {
  console.log(err ? 'Connection to Node server failed!' : 'Server listening on port: ', port);
});
