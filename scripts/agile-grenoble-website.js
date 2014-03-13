angular.module('stellar.directives', [])
    .factory('stellar', function() {
        return {
            window: function() {
                jQuery(window).stellar();
            },
            against: function(selector, args) {
                jQuery(selector).stellar(args);
            }
        };
    })
    .directive('stellarBackground', function() {
        return {
            restrict: 'A',
            compile: function(elem, attrs, transcludeFn) {
                elem.attr('data-stellar-background-ratio', attrs.stellarBackground);
                return function link (scope, element, attrs) {};
            },
        };
    })
    .directive('stellar', function() {
        return {
            restrict: 'A',
            compile: function(elem, attrs, transcludeFn) {
                elem.attr('data-stellar-ratio', attrs.stellar);
                return function link (scope, element, attrs) {};
            },
        };
    })
    .directive('stellarHor', function() {
        return {
            restrict: 'A',
            compile: function(elem, attrs, transcludeFn) {
                elem.attr('data-stellar-horizontal-offset', attrs.stellarHor);
                return function link (scope, element, attrs) {};
            },
        };
    })
    .directive('stellarVert', function() {
        return {
            restrict: 'A',
            compile: function(elem, attrs, transcludeFn) {
                elem.attr('data-stellar-vertical-offset', attrs.stellarVert);
                return function link (scope, element, attrs) {};
            },
        };
    })
;;angular.module('agilegrenoble', ['stellar.directives'])
    .controller('stellarCtrl', function($scope, stellar) {
        // The first step is to run .stellar() against the element:
        stellar.against(window);
        // ,
        // stellar.window();
        // or
        // stellar.against('body, .planet, .sun');
    })
;;