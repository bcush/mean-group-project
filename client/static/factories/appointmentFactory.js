// Build out our Appointment Factory

app.factory('AppointmentFactory', ['$http', function($http) {
  return {
    add: function(appointment, callback) {
      $http({
        method: "POST",
        url: "/appointments",
        data: appointment
      }).then(function(appointment) {
        callback();
      });
    },

    delete: function(appointment, callback) {
      $http({
        method: "DELETE",
        url: "/appointments/" + appointment._id
      }).then(function(appointment) {
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
    },
    getAll: function(callback){
      $http({
        method:'GET',
        url:'/appointments'
      }).then(function success(res){
        callback(res.data);
      },function failed(){
        console.log('did not get appointments');
      });
    },

    whoami: function(callback){
      $http({
        method:'GET',
        url:'/users/whoami'
      }).then(function success(res){
        callback(res.data);
      },function failed(){
        console.log('did not get user');
      });
    }

  };
}]);
