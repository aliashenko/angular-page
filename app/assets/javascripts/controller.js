// myApp.controller('AngularRequestCtrl', ['$scope',
//   function($scope) {
//    $scope.phones = [
//      {'name': 'Nexus S',
//       'snippet': 'Fast just got faster with Nexus S.'},
//      {'name': 'Motorola XOOM™ with Wi-Fi',
//       'snippet': 'The Next, Next Generation tablet.'},
//      {'name': 'MOTOROLA XOOM™',
//       'snippet': 'The Next, Next Generation tablet.'}
//    ];
//   }]);

// var app = angular.module('myApp', []);

myApp.config(function($httpProvider) {
  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

myApp.controller('AngularRequestCtrl', function($scope, $http) {

  $scope.get = function() {
    $http.defaults.headers.common['auth-token'] = 'C3PO R2D2';

    $http.get("http://inyourcornerbackend.25u.com/api/v1/clients/me ").success(function(result) {
        console.log("Success", result);
        $scope.result = result;
    }).error(function() {
        console.log("error");
    });
  };

});