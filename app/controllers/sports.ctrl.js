'use strict';

var express = require('express');
var router = express.Router();
var sportsService = require('../services/sports.srv.js');

router.get('/sports', function (req, res) {
    sportsService.getAllSports(function (sports) {
        res.statusCode = 200;
        res.send(sports);
    });
});

module.exports = router;