var express = require('express');
var Trip = require(__dirname + "/../models/trip");
var User = require(__dirname + "/../models/user");
var jsonParser = require('body-parser').json();
var handleError = require(__dirname + '/../lib/handle_error');
var dateParser = require(__dirname + '/../lib/date_parser');
var findDistance = require(__dirname + '/../app/js/find_distance');

var tripsRoute = module.exports = exports = express.Router();

tripsRoute.get('/trips', jsonParser, function(req, res) {
  // if there is a tripSearch object on req.body, then we are finding trips
  // for the user to sign up to.
  if (req.body.tripSearch) {
    var search = req.body.tripSearch;
    // 30 mins less than search time
    var leastTimeOrigin = dateParser(search.originTime) - (1000 * 60 * 30);
    // 30 mins more than search time
    var mostTimeOrigin = dateParser(search.originTime) + (1000 * 60 * 30);
    var leastTimeDest = dateParser(search.destTime) - (1000 * 60 * 30);
    var mostTimeDest = dateParser(search.destTime) + (1000 * 60 * 30);
    // TODO add day of week support and origin/dest support
    Trip.find({$and: [{$and: [{"originTime": {$gt: leastTimeOrigin}},
                              {"originTime": {$lt: mostTimeOrigin}}
                      ]},
                      {$and: [{"destTime": {$gt: leastTimeDest}},
                              {"destTime": {$lt: mostTimeDest}}
                      ]}
              ]}, function(err, docs) {
      if (err) handleError(err, res, 500);
      destMatch = [];
      docs.forEach(function(doc) {
        console.log(findDistance(search.origin, doc.origin));
        if(findDistance(search.origin, doc.origin) < 5 &&
           findDistance(search.dest, doc.dest) < 5) {
          destMatch.push(doc);
        }
      });

      res.json({trips: destMatch});
    });
  }
  // Otherwise we are finding all the trips the user is a part of.
  User.findOne({email: req.body.userEmail}, function(err, user) {
    if (err) handleError(err, res, 500);
    Trip.find({travelers: user._id}, function(err, docs) {
      if (err) handleError(err, res, 500);
      res.json({trips: docs});
    });
  });
});

tripsRoute.post('/trips', jsonParser, function(req, res) {
  var tripInfo = req.body.trip;
  User.findOne({email: req.body.trip.userEmail}, function(err, user) {
    var trip = new Trip();
    trip.tripName = tripInfo.tripName;
    trip.origin = tripInfo.origin;
    trip.originTime = dateParser(tripInfo.originTime);
    trip.dest = tripInfo.dest;
    trip.destTime = dateParser(tripInfo.destTime);
    trip.weekDays = tripInfo.weekDays;
    trip.travelers = [user._id];
    trip.seatsLeft = user.carSeats -1;
    trip.save(function(err, data) {
      debugger;
      if (err) handleError(err, res, 500);
    });
  });
});

tripsRoute.delete('/trips', jsonParser, function(req, res) {
  Trip.remove({_id: req.body.tripId}, function(err) {
    if (err) return handleError(err, res, 500);
    res.json({msg: 'success'});
  });
});