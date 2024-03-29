

var myApp = angular.module('app', ['ui.bootstrap']);

myApp.controller('Myctrl', function($scope){
 
});

myApp.controller('AlertDemoCtrl', function($scope) {
	 $scope.alerts = [
		{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
		{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
	];
	
	$scope.addAlert = function() {
		$scope.alerts.push({msg: 'Another alert!'});
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};
});

