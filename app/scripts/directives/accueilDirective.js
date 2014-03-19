var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agAccueil', ['selectMenu', function(selectMenu) {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				$scope.selectMenu = selectMenu.get();
			},
			templateUrl: './views/accueil.html'
		};
	}])
;
