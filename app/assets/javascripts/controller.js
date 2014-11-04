myApp.config(function($httpProvider) {
  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;
  $httpProvider.defaults.headers.common['Authorization'] = 'Token token=0ec3bd53cddc30075330c6c682f74784';

  //Remove the header used to identify ajax call  that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

myApp.controller('AngularRequestCtrl', function($scope, $http) {

  $scope.get = function() {

    $http.get("http://localhost:3001/api/v1/clients/me").success(function(result) {
        console.log("Success", result);
        $scope.result = result;
    }).error(function() {
        console.log("error");
    });
  };

});