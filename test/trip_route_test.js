var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
process.env.MONGODB_URL = 'mongodb://localhost/carpool_test';
var mongoose = require('mongoose');
var Trip = require(__dirname + '/../models/trip');
var User = require(__dirname + '/../models/user');
var url = 'localhost:3000/api';

require(__dirname + '/../server');