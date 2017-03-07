'use strict';

// Dependencies
const express = require('express');

// Router
const router = express.Router();

// Controller
const assets = require('../controllers/assets');

// Routes
router.get('/', assets.resume);
router.get('/certificate/introductiontoengineeringmechanics', assets.introductionToEngineeringMechanics);
router.get('/certificate/applicationsinengineeringmechanics', assets.applicationsInEngineeringMechanics);
router.get('/certificate/programmingforeverybody', assets.programmingForEverybody);

module.exports = router;
