'use strict';
angular.module('myblogApp').controller('regCtrl',['ENV','firebaseRef','fbProductsUrl','utils','$scope','$firebaseAuth',function(ENV,firebaseRef,fbProductsUrl,utils,$scope,$firebaseAuth){
    var model = $scope.model = {
        username:'',
        password:''
    };
    $scope.register = function(){
        console.log(fbProductsUrl);
        var ref = firebaseRef(fbProductsUrl);
        var auth = $firebaseAuth(ref);
        console.log(model.username+'   '+ model.password);

        auth.$createUser({
                email:model.username,
                password:model.password
        }).then(function(userData){
            console.log('user '+userData.uid+' created successfully.');
        }).catch(function(error){
            console.error('Error '+error);
        });



    };
}]);