// Define our barbers Controller

app.controller('barbersController', ['$scope', '$location', 'BarberFactory', '$routeParams', function($scope, $location, BarberFactory, $routeParams) {
  $scope.add = function(barber) {
    BarberFactory.add(barber, function() {
      console.log('from barbersController');
      $location.url('#/barbers');
    });
  }
  $scope.getAll = function(){
    BarberFactory.getAll(function(data){
      $scope.barbers = data;
    });
  }

  $scope.get = function(){
    console.log("from scope.get");
    console.log($routeParams.id);
    BarberFactory.get($routeParams.id, function(barber){
      console.log("from scope.get");
      // console.log(req.params.barber._id);
        $scope.barber = barber;
      //   console.log($scope.barber);
    });
  }
  // $scope.get();

  $scope.getAll();

}]);
