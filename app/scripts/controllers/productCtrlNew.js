/*global Firebase */
'use strict';

angular.module('myblogApp').controller('productCtrl',['$scope','$http','ENV', '$q',function($scope,$http,ENV,$q){
var model = $scope.model = {} ;
	var callApi = function(apiAddress){
		var defered = $q.defer() ;

		$http.get(apiAddress).then(function(data){
			defered.resolve(data.data);
		},function(reason){
			console.log('Failure to get the data from product server.');
			console.log(reason);
			defered.reject(reason);
		});
		return defered.promise;
	},

	getFirebase = function(url){

		var defered = $q.defer();
		var fireRef = new Firebase(url) ;

		if (fireRef){
			defered.resolve(fireRef);
		}			
		else		{
			defered.reject('Could not get firebase at '+ url +' location. ');
		}

		return defered.promise;
	};
			

	$scope.data = {name: 'Afshin Teymoori' , age:40} ;

	var p = callApi(ENV.apiEndpoint+'/products');
	p.then(function(data){
		$scope.myApiproducts = data ;
	},function(reason){
		$scope.myApiproducts = null ;
		console.log(reason);
	}) ;

	var ref = null ;
	getFirebase('https://afshinblog.firebaseio.com').then(function(fireRef){
		ref = fireRef ;
		
		// console.log('ref for afshinproduct is: ');
		// console.log(ref);

		var  defered = $q.defer() ;
		var productData = ref.child('products');
		
		productData.on('value',function(snapshot){
			if (snapshot.val()===null){
				var localEmptyRef = productData.push();
				console.log('products is empty and new local key created is: '+ localEmptyRef.key());
			}
			console.log('Getting data with registering value event on ref.child with products parameter.');
			defered.resolve(
				{
					ref: productData,
					data: snapshot.val()
				});
			
			},function(errorObject){
				console.log('no child product found.');
				defered.reject(errorObject) ;
			});
		
		return defered.promise;},
		function(err){console.log(err);}
	).then(
		function(data){
			// $scope.articlesRef = data.ref ;
			console.log('Products ref: and val');
			console.log(data);
			model.products = data.data;

		},
		function(error){
			console.log(error);
		}
	);

}]);

