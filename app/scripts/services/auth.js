'use strict';
angular.module('myblogApp').
factory('auth',['firebaseRef','fbProductsUrl','UserService','$window','$cookies','firebaseProductsDb',
    function(firebaseRef,fbProductsUrl,$firebaseAuth,UserService,$window,$cookies,firebaseProductsDb){
      console.log(firebaseProductsDb);
    //var ref = firebaseRef(fbProductsUrl);
    //console.log(ref);
    //var authObject = $firebaseAuth(ref);  

    var authentication = 
    {
        login: function(username,password){
           return authObject.$authWithPassword({
              email: username,
              password: password
            }).then(function(authData) {
              console.log('authData after login:');
              console.log(authData);
              UserService.init(username,password,authData);
              
              $cookies.put('authenticatedUser',UserService);
              $cookies.put('test1','test1Value');
              $cookies.put('authData',JSON.stringify(authData));
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
            $cookies.remove('authenticatedUser');
            $cookies.remove('authData');
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