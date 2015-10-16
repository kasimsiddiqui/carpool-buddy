var mongoose = require('mongoose');

var tripSchema = mongoose.Schema({
  origin: String,
  originTime: String,
  dest: String,
  destTime: String,
  weekDays: String,
  map: String,
  travellers: [{type: Object id}],
  seatsLeft: {type: 32-bit integer}
});

module.exports = mongoose.model('Trip', tripSchema);