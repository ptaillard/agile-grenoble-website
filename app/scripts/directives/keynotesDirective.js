var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agKeynotes', [function() {
		
		return {
			restrict: 'A',
			replace: false,
			controller: function ($scope) {
				$scope.scrolled = function() {
					$scope.menuselected = "keynotes";
				};
			},
			templateUrl: './views/keynotes.html'
		};
	}])
;
