'use strict';

// Dependencies
const morgan = require('morgan');
const cors = require('cors');

module.exports = app => {
  app.use('/', morgan('dev'));
  app.use('/', cors());
};
