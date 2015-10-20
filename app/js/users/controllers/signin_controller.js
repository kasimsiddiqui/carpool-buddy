module.exports = function(app) {
  app.controller('SigninController',
    ['$scope', '$http', '$location', '$base64',
    function($scope, $http, $location, base64) {
      $scope.user = {};

      $scope.sendToServer = function(user) {
        $http({
          method: 'GET',
          url: '/api/signin',
          headers: {
            'Authorization': 'Basic ' + base64.encode(user.email + ':' + user.password)
          }
        })
          .then(function(res) {
            //TODO: save token into cookie
            //TODO: go to app after login
          }, function(res) {
            console.log(res);
          });
      };
    }]
  );
};
