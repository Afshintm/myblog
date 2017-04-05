'use strict';

 angular.module('config', ['firebase'])

.constant('ENV', {name:'production',apiEndpoint:'http://afshinproductsdevelop.azurewebsites.net/api'})

.constant('fbProductsUrl', 'https://afshinproduct.firebaseio.com')

.constant('fbArticlesUrl', 'https://afshinblog.firebaseio.com')

.constant('fbjomonCustomersUrl', 'https://jomoncustomers.firebaseio.com/')
.config(function(){
	//console.log('config module configuration is running');
}).factory('firebaseProductsDb',['firebase',function(firebase){
  var config = {
    apiKey: 'AIzaSyAOJ84RW85evs5-hExyJkQkfzYeQ3l5FBI',
    authDomain: 'afshinproduct.firebaseapp.com',
    databaseURL: 'https://afshinproduct.firebaseio.com',
    storageBucket: 'afshinproduct.appspot.com',
  };
  console.log(firebase);
  config.app = firebase.initializeApp(config);
  config.db = config.app.database();
  return config ;
}]).factory('firebaseJomonCustomersDb',['firebase',function(firebase){
  var config = {
      apiKey: 'AIzaSyBOo9MMiTGl7305ueDCH6ucpeVTJPrY1IM',
      authDomain: 'jomoncustomers.firebaseapp.com',
      databaseURL: 'https://jomoncustomers.firebaseio.com',
      storageBucket: 'jomoncustomers.appspot.com',
    };
  config.app = firebase.initializeApp(config,'JomonCustomersApp');
  config.db = config.app.database();
  return config ;
}])
.run(['firebaseProductsDb','firebaseJomonCustomersDb','firebase',
  function(firebaseProductsDb,firebaseJomonCustomersDb,firebase){
	console.log('config module run phase is running');
  console.log(firebaseProductsDb);
	console.log(firebaseJomonCustomersDb);
  console.log(firebase);
}]);
