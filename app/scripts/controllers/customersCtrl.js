'use strict';

angular.module('myblogApp').controller('customersCtrl',['$scope','Customers','currentAuth',function($scope,Customers,currentAuth){
    var model = $scope.model = {} ;
    console.log(Customers) ;
    console.log('Authentication result:') ;
    console.log(currentAuth) ;

    model.customers = Customers.getAll() ;
    // Customers.getAll().then(function(data){
    //     model.customers = data ;
    // }).catch(function(error){
    //     console.error(error);
    // });

    $scope.removeCustomer = function(ref){
        console.log('remove is called'+ref);
        Customers.remove(ref);
    };
    
}]).controller('customersEditCtrl',['$scope','$state','$stateParams','Customers',function($scope,$state,$stateParams,Customers){
    var model = $scope.model = {} ;

    Customers.getById($stateParams.id).then(function(record){
        model.customer = record;

    }).catch(function(error){
        console.error(error);
    });
 
    $scope.updateCustomer = function(){
        console.log('update customer is called.');
        var updresult = Customers.update(model.customer);
        updresult.then(function(index){
            console.log(index);    
        });
        $state.go('customers');
    };

}]).controller('customersNewCtrl',['$scope','$state','Customers',function($scope,$state,Customers){
    var model = $scope.model = {} ;
    model.customer = {};

    // Customers.getAll().then(function(data){
    //     model.customersData = data ;
    // }).catch(function(error){
    //     console.error(error);
    // });
    model.customersData = Customers.getAll() ;
    $scope.newCustomer = function(){
        var list = model.customersData;              
        var existingMatch = list.filter(function(value){
            return (value.id === model.customer.id) ;
        });
        if (existingMatch.length===0){
            Customers.insert(model.customer).
            then(function(index){
                console.log(index);
            });
        }
        $state.go('customers');
    };


}]);