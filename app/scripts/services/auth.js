'use strict';
angular.module('myblogApp').
factory('auth',['firebaseRef','fbProductsUrl','$firebaseAuth','UserService','$window','$cookieStore',
    function(firebaseRef,fbProductsUrl,$firebaseAuth,UserService,$window,$cookieStore){
    var authentication = 
    {
        login: function(username,password){
            var ref = firebaseRef(fbProductsUrl);
            var authObject = $firebaseAuth(ref);  
            authObject.$authWithPassword({
              email: username,
              password: password
            }).then(function(authData) {
              console.log('Logged in as: ', authData.uid);
              UserService.init(username,password,authData);
              console.log(UserService);
              $cookieStore.put('authenticatedUser',UserService);
              $window.sessionStorage.authenticatedUser = UserService ;
            }).catch(function(error) {
              console.error('Authentication failed: ', error);
            }); 
        }
    } ;
    return authentication ;
    
}]);