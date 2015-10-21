module.exports = function(app) {
  app.controller('TripsController', ['$scope', '$http', function($scope, $http) {

    $scope.trips = [];

    $scope.getMyTrips = function() {
      $http.get('/api/trips')
        .then(function(res) {
          $scope.trips = res.data;
        }, function(res) {
          console.log(res);
        });
    };
  }]);
};