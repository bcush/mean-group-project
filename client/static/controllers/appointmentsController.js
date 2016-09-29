// Define our appointments Controller

app.controller('appointmentsController', ['$scope', '$location', 'AppointmentFactory', function($scope, $location, AppointmentFactory) {
  $scope.add = function(appointment) {
    AppointmentFactory.add(appointment, function() {
      console.log('from appointmentsController');
      $location.url('#/appointments');
    });
  };
  $scope.getAll = function(){
    AppointmentFactory.getAll(function(data){
      $scope.appointments = data;
    });
  },

  $scope.whoami = function(){
    AppointmentFactory.whoami(function(data){
      $scope.currentUser = data;
    });
  };

  $scope.getAll();
  $scope.whoami();

  // $scope.login = function(user){
  //   AppointmentFactory.login(user, function() {
  //     $location.url('/appointments');
  //   });
  // };
}]);
