// Define our appointments Controller

app.controller('appointmentsController', ['$scope', '$location', '$routeParams', '$filter', 'AppointmentFactory', function($scope, $location, $routeParams, $filter, AppointmentFactory) {
  $scope.add = function(appointment) {
    appointment._barber = $routeParams.barber_id;
    // appointment.date = $filter('date')(appointment.date,'shortDate');
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
