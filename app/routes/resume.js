'use strict';

// Dependencies
const express = require('express');

// Router
const router = express.Router();

// Resume
router.get('/', (req, res) => {
  const options = {
    root: `${__dirname.slice(0, -10)}public/assets/`,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  res.sendFile('resume.pdf', options, err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: resume.pdf');
    }
  });
});

module.exports = router;
