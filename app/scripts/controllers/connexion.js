var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.controller('ModalConnexionInstanceCtrl', function($scope, $modalInstance, items) {
    	$scope.items = items;
		$scope.selected = {
			item: $scope.items[0]
		};

		$scope.ok = function () {
			$modalInstance.close($scope.selected.item);
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
    })
    .controller('ModalConnexionCtrl', function($scope, $modal, $log) {
       
		  $scope.items = ['item1', 'item2', 'item3'];
		  $scope.disconnect = function() {
		  	gapi.auth.signOut();
		  };

		  var modalInstance = null;

		  $scope.open = function () {

		    modalInstance = $modal.open({
		      templateUrl: './views/connexion.html',
		      controller: "ModalConnexionInstanceCtrl",
		      resolve: {
		        items: function () {
		          return $scope.items;
		        }
		      }
		    });

		    modalInstance.result.then(function (selectedItem) {
		      $scope.selected = selectedItem;
		    }, function () {
		      $log.info('Modal dismissed at: ' + new Date());
		    });
		  };

		  $scope.$on('event:google-plus-signin-success', function (event,authResult) {
		    // Send login to server or save into cookie
		    console.log("connexion OK");
		    gapi.client.load('plus','v1', loadProfile); 
		    $scope.logged = 1;
		  });
		  
		  

		  $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
		  	console.log("connexion FAIL");
		  	$scope.logged = 1;
		    // Auth failure or signout detected
		  });

		  var loadProfile = function() {
		  	var request = gapi.client.plus.people.get( {'userId' : 'me'} );
    		request.execute(loadProfileCallback);
    	  };

    	  var loadProfileCallback = function(obj) {
			    $scope.profile = obj;

			    $scope.email = obj['emails'].filter(function(v) {
			        return v.type === 'account';
			    })[0].value;
			    
			    $scope.image = $scope.profile['image']['url'];
			    $scope.name = $scope.profile['displayName'];
			  };
    });

;
