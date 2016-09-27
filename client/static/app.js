// This is our client side app
var app = angular.module('barberApp', ['ngRoute', 'ngMessages']);

// Set up our client side configs
app.config(function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push(
      function($q, $location) {
        return {
          'responseError': function(rejection) {
            if (rejection.status == 401) {
              $location.url('/login');
            }
            return $q.reject(rejection);
       }
       };
  });

      $routeProvider
        .when('/login', {
          // Angular route to present login fields
          templateUrl: 'partials/login.html',
          controller:  'usersController'
        })
       .otherwise({
          // Otherwise ???
          redirectTo: '/login'
        });
});
