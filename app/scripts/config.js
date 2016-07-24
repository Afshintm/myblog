'use strict';

 angular.module('config', [])

.constant('ENV', {name:'production',apiEndpoint:'http://afshinproductsdevelop.azurewebsites.net/api'})

.constant('fbProductsUrl', 'https://afshinproduct.firebaseio.com')

.constant('fbArticlesUrl', 'https://afshinblog.firebaseio.com')

.constant('fbjomonCustomersUrl', 'https://jomoncustomers.firebaseio.com/')
.config(function(){
	console.log('config module configuration is running');
}).factory('firebaseProductsDb',function(){
var config = {
    apiKey: "AIzaSyAOJ84RW85evs5-hExyJkQkfzYeQ3l5FBI",
    authDomain: "afshinproduct.firebaseapp.com",
    databaseURL: "https://afshinproduct.firebaseio.com",
    storageBucket: "afshinproduct.appspot.com",
  };
  config.app = firebase.initializeApp(config);
  config.db = config.app.database();
  return config ;
}).run(['firebaseProductsDb',function(firebaseProductsDb){
	console.log('config module run phase is running');
	console.log(firebaseProductsDb);
}]);
