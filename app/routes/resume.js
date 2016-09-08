'use strict';

// Dependencies
const express = require('express');

// Router
const router = express.Router();

// Controller
const assets = require('../controllers/assets');

// Routes
router.get('/', assets.resume);
router.get('/introductiontoengineeringmechanics', assets.introductionToEngineeringMechanics);
router.get('/applicationsinengineeringmechanics', assets.applicationsInEngineeringMechanics);
router.get('/programmingforeverybody', assets.programmingForEverybody);

module.exports = router;
