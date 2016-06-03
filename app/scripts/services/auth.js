'use strict';
angular.module('myblogApp').
factory('auth',['firebaseRef','fbProductsUrl','$firebaseAuth','UserService','$window','$cookieStore',
    function(firebaseRef,fbProductsUrl,$firebaseAuth,UserService,$window,$cookieStore){
    var ref = firebaseRef(fbProductsUrl);
    var authObject = $firebaseAuth(ref);  

    var authentication = 
    {
        login: function(username,password){
           return authObject.$authWithPassword({
              email: username,
              password: password
            }).then(function(authData) {
              
              UserService.init(username,password,authData);
              
              $cookieStore.put('authenticatedUser',UserService);
              $cookieStore.put('authData',authData);
              $window.sessionStorage.authenticatedUser = UserService ;
            }).catch(function(error) {
              console.error('Authentication failed: ', error);
            }); 
        },
        authObj : authObject,
        logout : function(){
          console.log('logout is called in auth factory');

          var currentAuth = authObject.$getAuth();
          if (currentAuth!==null){
            console.log('We are logging out');
            authObject.$unauth();
            $cookieStore.remove('authenticatedUser');
            $cookieStore.remove('authData');
          }
        }
        //  function(){
        //     var ref = firebaseRef(fbProductsUrl);
        //     var authObject = $firebaseAuth(ref);  
        //     return authObject ;
        // }
    } ;
    return authentication ;
    
}]);