var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp
	.service('selectMenu', function() {
		var menuselected = null;

		this.set = function(menu) {
			menuselected = menu;
		};

		this.get = function() {

		};
	})
	.directive('agNav', ['selectMenu', function(selectMenu) {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				$scope.menuselected = "accueil";
				selectMenu.set($scope.menuselected);
			},
			templateUrl: './views/nav.html'
		};
	}])
;
