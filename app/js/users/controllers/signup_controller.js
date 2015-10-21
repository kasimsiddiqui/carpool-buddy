module.exports = function(app) {
  app.controller('SignupController',
    ['$scope', '$http', '$location',
    function($scope, $http, $location) {
      $scope.user = {};

      $scope.sendToServer = function(user) {
        $http.post('/api/signup', user)
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
