'use strict';
angular.module('myblogApp').
  factory('myauth',['firebaseProductsDb','UserService','$cookies','$firebaseAuth',function(firebaseProductsDb,UserService,$cookies,$firebaseAuth){
    var au = firebase.auth() ;
    var authObject = null;

    $firebaseAuth().$onAuthStateChanged(function(user) {
        if (user) {
            authObject = user ;
        }else {
            authObject = null ;
            }
        });

    var authentication = 
    {
        login: function(username,password){
          return au.signInWithEmailAndPassword(username,password).then(function(authData){
            UserService.init(username,password,authData);
            $cookies.put('authenticatedUser',UserService);
            $cookies.put('test1','test1Value');
            $cookies.put('authData',JSON.stringify(authData));
          }).catch(function(error){
            console.log('exception in login:');
            console.log(error);
          });
        },
        logout: function(){
            au.signOut().then(function(){
                $cookies.remove('authenticatedUser');
                $cookies.remove('test1');
                $cookies.remove('authData');
                console.log('Signed Out successfully');
            }).catch(function(error){
              console.log('did not signOut');
            });
        },
        authObj: function(){return authObject;},
        angularfireAuthentication: $firebaseAuth(),
        firebaseAuthentication: au
    };
    return authentication ;
//});
}]);