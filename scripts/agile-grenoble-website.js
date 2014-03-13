'use strict';

angular.module('agileGrenobleWebsiteApp', [
  'ngResource',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
;'use strict';

angular.module('agileGrenobleWebsiteApp')
  .controller('MainCtrl', function ($scope) {
   
  });
