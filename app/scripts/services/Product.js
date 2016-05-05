'use strict';

angular.module('myblogApp').service('productService',['$scope','$http','ENV',function($scope, $http,  ENV){
	var productService = {
		get: function(){
			return $http.get(ENV.apiEndpoint + '/products') ;
		}
	};
	return productService ;
}]) ;




// var myPromise = new Promise(function(fulfill,reject){
// try{
// 	fulfill()
// }catch(e){
// 	reject(e) ;
// }
// });



// function all(promises) {
//   var accumulator = [];
//   var ready = Promise.resolve(null);

//   promises.forEach(function (promise) {
//     ready = ready.then(function () {
//       return promise;
//     }).then(function (value) {
//       accumulator.push(value);
//     });
//   });

//   return ready.then(function () { return accumulator; });
// }