(function () {
	'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.list = '';
  $scope.message = '';
  $scope.list2 = '';
  $scope.check = function(){
    $scope.list2 = $scope.list.split(',')
    
    if (($scope.list2) == '') {
      $scope.message = "Please enter data first"
    } else if (($scope.list2.length) > 3){
      $scope.message = "Too much!!"
    } else  {
      $scope.message = "Enjoy"
    }
  }
}

})();
