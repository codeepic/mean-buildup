(function() {
	angular.module('angular-buildup')

	.directive('singleRoom', function() {
	  return {
	  	restrict: 'E',
	  	scope:{ 
	  		roomInfo: "=roomInfo"
	  	},
	    templateUrl: 'static/src/singleRoomView/singleRoomTemplate.html',
	    link: function(scope, $element, $attributes){
	    	console.log(scope.roomInfo);
	    	//scope.roomInfo;
			// area: 
			// standard: 
			// capacity: 
			// bed: 
			// price: 
	    }
	  };
	});
}());
