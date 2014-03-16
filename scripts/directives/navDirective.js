var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agNav', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			templateUrl: './views/nav.html'
		};
	}])
;
