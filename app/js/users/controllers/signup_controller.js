module.exports = function(app) {
  app.controller('SignupController',
    ['$scope', '$http', '$window',
    function($scope, $http, $window) {
      $scope.user = {};
      $scope.confirmPassword = true;

      $scope.passwordMatch = function(user) {
        return user.password === user.confirmation;
      };

      $scope.disableButton = function(user) {
        return ($scope.userForm.$invalid && !$scope.passwordMatch(user));
      };

      $scope.sendToServer = function(user) {
        $http.post('/api/signup', user)
          .then(function(res) {
            //TODO: save token into cookie
            console.log('signup');
            $window.location.assign('/main.html');
          }, function(res) {
            console.log(res);
          });
      };
    }]
  );
};
