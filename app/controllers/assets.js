'use strict';

// Dependencies
const config = require('../config/pdf');

// Resume
function resume(req, res) {
  res.sendFile('resume.pdf', config, err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: resume.pdf');
    }
  });
}

// Introduction to Engineering Mechanics
function introductionToEngineeringMechanics(req, res) {
  res.sendFile('introduction_to_engineering_mechanics.pdf', config, err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: introduction_to_engineering_mechanics.pdf');
    }
  });
}

// Applications in Engineering Mechanics
function applicationsInEngineeringMechanics(req, res) {
  res.sendFile('applications_in_engineering_mechanics.pdf', config, err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: applications_in_engineering_mechanics.pdf');
    }
  });
}

// Programming for Everybody
function programmingForEverybody(req, res) {
  res.sendFile('programming_for_everybody.pdf', config, err => {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent: programming_for_everybody.pdf');
    }
  });
};

module.exports = {
  resume,
  introductionToEngineeringMechanics,
  applicationsInEngineeringMechanics,
  programmingForEverybody
};
