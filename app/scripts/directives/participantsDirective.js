var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('agParticipants', [function() {
		
		return {
			restrict: 'A',
			//transclude: 'element',
			replace: true,
			controller: function ($scope) {

			},
			templateUrl: './views/participants.html'
		};
	}])
;
