var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agAccueil', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {

			},
			templateUrl: './views/accueil.html'
		};
	}])
;
