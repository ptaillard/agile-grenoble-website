var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agInfos', ['$window', function($window) {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {
				$scope.site = function(annee) {
					if(annee <= 2009) {
						$window.location.href = 'http://at' + annee + '.agiletour.org/';
					}
					else if(annee <= 2011) {
						$window.location.href = 'http://agile-grenoble.org/' + annee + '/start';
					}
					else {
						$window.location.href = 'http://' + annee + '.agile-grenoble.org';
					}
				};
			},
			templateUrl: './views/infos.html'
		};
	}])
;
