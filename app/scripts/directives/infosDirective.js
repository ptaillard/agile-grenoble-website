var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agInfos', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
			},
			templateUrl: './views/infos.html'
		};
	}])
;
