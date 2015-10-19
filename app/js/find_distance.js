var distance = require('google-distance');
//distance.apiKey = 'API_KEY';

distance.get(
  {
    origin: 'Seattle, WA', //example
    destination: 'Portland, OR', //example
    units: 'imperial'
  },

  function(err, data) {
    if (err) return console.log(err);
    console.log(data.distance);
});
