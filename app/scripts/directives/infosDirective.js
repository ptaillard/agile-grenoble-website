var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agInfos', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			templateUrl: './views/infos.html'
		};
	}])
;
