'use strict';

module.exports = {
  root: `${__dirname.slice(0, -10)}public/assets/`,
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};
