'use strict';
angular.module('myblogApp').controller('loginCtrl',['$scope','utils','ENV','UserService','myauth','$rootScope','$state',
	function($scope, utils, ENV, UserService, myauth, $rootScope, $state){
    
    var model = $scope.model = {

    };
    $scope.login = function(){
        console.log('login is happening');
        myauth.login(model.username,model.password).then(function(){
        	console.log('logged in successfully.');
        	console.log($rootScope.returnToState) ;
        	if($rootScope.returnToState){
        		$state.go($rootScope.returnToState.name) ;

        	}
        }).catch(function(error){
        	console.log('You are not authenticated.');
            console.log('authentication Error is :'+error) ;
        });
    };
}]);

