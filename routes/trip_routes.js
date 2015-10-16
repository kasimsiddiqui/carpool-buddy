var express = require('express');
var Trip = require(__dirname + "/../models/trip");
var jsonParser = require('body-parser').json();

var tripsRoute = module.exports = exports = express.Router();