'use strict';

/**
 * @ngdoc function
 * @name myblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myblogApp
 */
angular.module('myblogApp')
  .controller('MainCtrl', ['$scope','$cookieStore','auth',function ($scope,$cookieStore,auth) {
  	$scope.authData = $cookieStore.get('authData');
    //console.log($scope.authData);
  	//$scope.authObj = auth.authObj;
    if ($scope.authData){
      $scope.authenticatedUserEmail = $scope.authData.auth.token.email ;
    }else
    {
      $scope.authenticatedUserEmail = '' ;
    }
    

    $scope.logout = function(){
      auth.logout() ;
}

  	//console.log($scope.authData);
    $scope.awesomeThings = [
      'Fully responsive pages working with all desktop, tablet and mobile devices',
      'Bootstrap 3 UI enabled',
      'AngularJs development framework',
      'Jasmine test framework'
    ];
  }]);
