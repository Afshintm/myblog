'use strict';

angular.module('myblogApp').controller('articlesCtrl',['$scope','$q','$http','ENV','firebaseRef','utils',function($scope,$q,$http,Env,firebaseRef,utils){
	var model = $scope.model = {
		articles: []
	};
	var ref = firebaseRef('https://afshinblog.firebaseio.com');
	
	utils.getFirebaseArray(ref).then(function(fireBaseArray){
		if (fireBaseArray && fireBaseArray.length>0){
			model.articles = fireBaseArray ;
		}

	},function(error){
		throw(error);
	});
	//console.log(r);
}]);