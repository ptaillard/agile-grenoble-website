var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agOrateurs', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			templateUrl: './views/orateurs.html'
		};
	}])
;
