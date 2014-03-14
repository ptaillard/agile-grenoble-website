angular.module('agilegrenoble', ['stellar.directives'])
    .controller('stellarCtrl', function($scope, stellar) {
        // The first step is to run .stellar() against the element:
        stellar.against(window);
        // ,
        // stellar.window();
        // or
        // stellar.against('body, .planet, .sun');
    })
;