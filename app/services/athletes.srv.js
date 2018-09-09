'use strict';

const sportsJson = require('../../assets/athletes.json');

module.exports.getAllAthletes = function (success, error) {
    success(sportsJson);
}