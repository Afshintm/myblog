'use strict';
angular.module('myblogApp').controller('loginCtrl',['$scope','utils','ENV','UserService','auth',function($scope, utils, ENV,UserService, auth){
    
    var model = $scope.model = {

    };
    $scope.login = function(){
        console.log('login is happening');
        auth.login(model.username,model.password);
    };
}]);

