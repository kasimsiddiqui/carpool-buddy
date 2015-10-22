module.exports = function(app) {
  app.controller('SigninController',
    ['$scope', '$http', '$window', '$base64',
    function($scope, $http, $window, base64) {
      $scope.user = {};
      $scope.confirmPassword = false;

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
            console.log('login');
            $window.location.assign('/main.html');
          }, function(res) {
            console.log(res);
          });
      };
    }]
  );
};
