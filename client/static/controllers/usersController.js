// Define our User Controller

app.controller('usersController', ['$scope', '$location', 'UserFactory', function($scope, $location, UserFactory) {
  $scope.register = function(user) {
    UserFactory.register(user, function() {
      $location.url('/userProfile');
    });
  };

  $scope.getUser = function(){
    UserFactory.getUser(function(data){
      $scope.user = data;
    });
  };

  $scope.login = function(user){
    UserFactory.login(user, function() {
      $location.url('/userProfile');
    });
  };

  $scope.logout = function(user){
    UserFactory.logout(user, function() {
      $location.url('/login');
    });
  };

  $scope.getUser();

}]);
