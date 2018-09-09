'use strict';

const sportsJson = require('../../assets/sports.json');

module.exports.getAllSports = function (success, error) {
    success(sportsJson);
}