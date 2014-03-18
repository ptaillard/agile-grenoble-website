var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agNav', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				$scope.menuselected = "accueil";
			},
			templateUrl: './views/nav.html'
		};
	}])
;
