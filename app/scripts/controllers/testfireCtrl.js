angular.module("myblogApp").controller("testfireCtrl",["$scope","$firebaseObject","firebaseProductsDb",function($scope,$firebaseObject,firebaseProductsDb){
	var model = $scope.model = {
		name: 'testfire'
	};

	var ref = firebaseProductsDb.db.ref();
	console.log(ref);

	var obj = $firebaseObject(ref);
	obj.$loaded().then(function(data){

		angular.forEach(obj, function(value, key) {
          console.log(key, value);
       });

	}).catch(function(error){
		console.log(error.message);
	});
}]);