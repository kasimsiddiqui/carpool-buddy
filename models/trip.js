var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.ObjectId

var tripSchema = mongoose.Schema({
  origin: String,
  originTime: String,
  dest: String,
  destTime: String,
  weekDays: String,
  map: String,
  travelers: [ObjectId],
  seatsLeft: Number
});

module.exports = mongoose.model('Trip', tripSchema);