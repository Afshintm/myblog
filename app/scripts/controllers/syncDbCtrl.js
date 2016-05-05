'use strict';

angular.module('myblogApp').controller('syncDbCtrl',['$scope','utils','ENV','firebaseRef',function($scope, utils, ENV,firebaseRef){
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
        	if (ref.key() === model.firebaseArray[index].$id){
        		console.log('index updated : ' + model.firebaseArray[index].$id);
        	}
        		
        });		
	};
	
	utils.getApi(ENV.apiEndpoint + '/products').then(function(databaseData){
		model.dbProducts = databaseData ;
	},function(reason){

		throw (reason);
	});
	var productsRef = firebaseRef(model.fireBaseProductRef);
	utils.getFirebaseArray(productsRef).then(function(firebaseData){
			//console.log('data from firebase ref: '+ model.fireRef);
			model.firebaseArray = firebaseData;
			if (model.firebaseArray.length <= 0 && model.dbProducts.length>0)
			{
				angular.forEach(model.dbProducts,function(value){
					model.firebaseArray.$add(value);
				});
			}
		},
		function(reason){
			//console.log('no Data in firebase ref '+ fireRef);
			console.log(reason);
			model.firebaseData = null ;
		}).then();
}]);