// factory is a type of provider in AngularJs which construct a new service using a function with one or more parameters
// which are effectively the dependencies. The return value of this function is the service instance created by this recipe. 
'use strict';
angular.module('myblogApp')
// .service('$firebaseArray',['$firebase',function FirebaseArray($firebase){
// 	this.abc = function(url){
// 		return (url);
// 	}
// }])

.factory('utils',['$http','$q','myService','firebaseRef','$firebaseArray','$firebaseObject',function utilsFactory($http, $q, myService, firebaseRef, $firebaseArray, $firebaseObject){
	
	var utils = {
		getApi: function(apiAddress){
			var defered = $q.defer() ;
			if (apiAddress.length<=0)
			{
				defered.reject(null) ;
			}
			try{
				$http.get(apiAddress).then(
				function(data){
					defered.resolve(data.data);
				},function(reason){
					console.log('Failure to get the data from ' + apiAddress);
					defered.reject(reason);
				});
			}
			catch(e){
				defered.reject(e);
			}
			return defered.promise;
		},
		//gets a firebase Ref and return angularfire $firebaseArray which is an array of data on that Ref
		getFirebaseArray: function(fireRef){
			var defered = $q.defer();
			$firebaseArray(fireRef).$loaded().then(
				function(result){

					defered.resolve(result);
				},
				function(reason){
				defered.reject(reason);
			});
			return defered.promise;
		},
		//gets a firebase Ref and return angularfire $firebaseArray which is an array of data on that Ref
		getFirebaseObject: function(fireRef){
			var defered = $q.defer();
			$firebaseObject(fireRef).$loaded().then(
				function(result){

					defered.resolve(result);
				},
				function(reason){
				defered.reject(reason);
			});
			return defered.promise;
		}


	};

	return utils;

}]);