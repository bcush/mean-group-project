// Define our barbers Controller

app.controller('barbersController', ['$scope', '$location', 'BarberFactory', function($scope, $location, BarberFactory) {
  $scope.add = function(barber) {
    BarberFactory.add(barber, function() {
      console.log('from barbersController');
      $location.url('#/barbers');
    });
  }
  $scope.getAll = function(){
    barberFactory.getAll(function(data){
      $scope.barbers = data
    });
  }

  // $scope.login = function(user){
  //   BarberFactory.login(user, function() {
  //     $location.url('/barbers');
  //   });
  // };
}]);
