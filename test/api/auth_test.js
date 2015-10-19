'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var mongoose = require('mongoose');
require(__dirname + '/../../server.js');
var httpBasic = require(__dirname + '/../../lib/http_basic');
var eatAuth = require(__dirname + '/../../lib/eat_auth');

var User = require(__dirname + '/../../models/user');

var url = 'localhost:3000';

describe('http_basic', function() {
  it("should be able to parse http basic auth", function() {
    var req = {
      headers: {
        authorization: 'Basic ' + (new Buffer('test@example.com:foobar123')).toString('base64')
      }
    };

    httpBasic(req, {}, function() {
      expect(typeof req.auth).to.eql('object');
      expect(req.auth.email).to.eql('test@example.com');
      expect(req.auth.password).to.eql('foobar123');
    });
  });
});
