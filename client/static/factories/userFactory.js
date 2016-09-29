// Build out our User Factory

app.factory('UserFactory', ['$http', function($http) {
  return {
    register: function(user, callback) {
      $http({
        method: "POST",
        url: "/register",
        data: user
      }).then(function(user) {
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

    logout: function(callback) {
      $http({
        method: "/GET",
        url: "/logout"
      }).then(function() {
        callback();
      });
    },

    getUser: function(callback){
      $http({
        method:"GET",
        url:'/users',
      }).then(function(res){
        callback(res.data);
      },function(){
        console.log('Could not get user');
      });
    }

  };
}]);
