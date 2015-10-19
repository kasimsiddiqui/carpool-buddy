var eat = require('eat');
var User = require(__dirname + '/../models/user');

module.exports = exports = function(req, res, next) {
  var encryptedToken = req.headers.token || (req.body ? req.body.token : undefined);

  if(!encryptedToken) {
    return res.status(401).json({msg: 'could not authenticate'});
  }

  eat.decode(encryptedToken, process.env.APP_SECRET, function(err, token) {
    if(err) {
      return res.status(500).json({msg: 'server error'});
    }

    User.findOne({_id: token.id}, function(err, user) {
      if(err) {
        return res.status(500).json({msg: 'server error'});
      }

      if(!user) {
        return res.status(401).json({msg: 'could not authenticate'});
      }

      req.user = user;
      next();
    });
  });

};
