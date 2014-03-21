var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp
	.directive('agPage', [function() {	
		return {
			restrict: 'A',
			transclude: true,
			replace: true,
			controller: function ($scope) {
				$scope.scrolled = function(direction) {
					$scope.$parent.menuselected = $scope.idPage;
					$scope.$parent.$apply();
				};
			},
			scope: {idPage:'@agPage'},
			template: '<div ng-transclude ui-jq="waypoint" ui-options="scrolled, {offset:-1}" class="page" id="{{idPage}}" data-top="opacity:1.0; " data-80p-top="opacity:0.2; "></div>'
		};
	}])
;
