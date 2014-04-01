var AgileGrenobleApp = AgileGrenobleApp || {};
AgileGrenobleApp.directive('compileCallback',function(){
	  return {
	    priority: 1001, // make sure it's the last to run
	    scope : {
	       compileCallback: "&"
	    },
	    link: function ($scope){
	      	$scope.compileCallback();
	    }
	  }
});
