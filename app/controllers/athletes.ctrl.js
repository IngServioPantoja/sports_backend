'use strict';

var express = require('express');
var router = express.Router();
var athletesService = require('../services/athletes.srv.js');

router.get('/athletes', function (req, res) {
    athletesService.getAllAthletes(function (athletes) {
        res.statusCode = 200;
        res.send(athletes);
    });
});

module.exports = router;