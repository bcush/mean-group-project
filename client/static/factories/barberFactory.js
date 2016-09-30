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
    },

    get: function(id,callback){
      $http({
        method:"GET",
        url:'/barbers/'+id
      }).then(function(res){
        // barbers.data = res.data;
        callback(res.data);
      });
    },

    getAll: function(callback){
      $http({
        method:'GET',
        url:'/barbers'
      }).then(function success(res){
        callback(res.data)
      },function failed(){
        console.log('did not get barbers');
      })
    }
  };
}]);
