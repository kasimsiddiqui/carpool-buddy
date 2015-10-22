var msm = require('minutes-seconds-milliseconds');

module.exports = function(milliseconds) {

  var time = msm(milliseconds);

  return time;
};

