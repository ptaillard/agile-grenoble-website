var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agKeynotes', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			templateUrl: './views/keynotes.html'
		};
	}])
;
