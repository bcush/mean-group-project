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
          templateUrl: 'partials/landingPage.html',
          controller:  'usersController'
        })
        .when('/search', {
          templateUrl: 'partials/searchBarbers.html',
          controller: 'barbersController'
        })
        .when('/home', {
          templateUrl:'partials/userProfile.html',
          controller:  'usersController'
        })
        .when('/userProfile', {
          templateUrl:'partials/userProfile.html',
          controller:  'usersController'
        })
        .when('/barberProfile', {
          templateUrl:'partials/barberProfile.html',
          controller:'barbersController'
        })
        .when('/addBarber', {
          templateUrl:'partials/addBarber.html',
          controller:'barbersController'
        })
       .when('/addAppointment', {
          templateUrl:'partials/addAppointment.html',
          controller:'appointmentsController'
        })
       .otherwise({
          // Otherwise ???
          redirectTo: '/login'
        });
});
