'use strict';

angular.module('myblogApp').controller('syncDbCtrl',['$scope','utils','ENV','firebaseRef','firebaseProductsDb','$firebaseArray',function($scope, utils, ENV,firebaseRef,firebaseProductsDb,$firebaseArray){
	var model = $scope.model = {
		viewTitle:'sync Database',
		dbProducts: [],
		firebaseData: null,
		edit:[],
		fireBaseProductRef: 'https://afshinproduct.firebaseio.com'
	};
	$scope.editPrice = function(index){

        model.edit[index] = 1;
        model.firebaseArray[index].Price = parseFloat(model.firebaseArray[index].Price).toFixed(2);

	};
	$scope.updatePrice = function(index){
		model.edit[index] = 0;
        model.firebaseArray.$save(index).then(function(ref){
        	if (ref.key === model.firebaseArray[index].$id){
        		console.log('index updated : ' + model.firebaseArray[index].$id);
        	}
        });		
	};
	
	utils.getApi(ENV.apiEndpoint + '/products').then(function(databaseData){
		model.dbProducts = databaseData ;
	},function(reason){

		throw (reason);
	});

    var ref = firebaseProductsDb.db.ref();
    model.firebaseArray = $firebaseArray(ref);
	
}]);