// Build out our Barber Factory

app.factory('BarberFactory', ['$http', function($http) {
  return {
    add: function(barber, callback) {
      $http({
        method: "POST",
        url: "/barbers",
        data: barber
      }).then(function(barber) {
        callback();
      });
    },

    login: function(user, callback) {
      $http({
        method: "POST",
        url: "/login",
        data: user
      }).then(function(user) {
        callback();
      });
    }
  };
}]);
