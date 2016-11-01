'use strict';
angular.module('myblogApp').
//factory('auth',['firebaseRef','fbProductsUrl','UserService','$window','$cookies','config','firebaseProductsDb',
//    function(firebaseRef,fbProductsUrl,$firebaseAuth,UserService,$window,$cookies,config,firebaseProductsDb){
  factory('myauth',['firebaseProductsDb','UserService','$cookies','$firebaseAuth',function(firebaseProductsDb,UserService,$cookies,$firebaseAuth){
    var au = firebase.auth() ;
    var authObject = null;
    console.log('$firebaseAuth is :') ;
    console.log($firebaseAuth()) ;

    $firebaseAuth().$onAuthStateChanged(function(user) {
        console.log('onAuthStateChanged callBack is called.') ;
        if (user) {
            authObject = user ;
        }else {
            authObject = null ;
            
            }
            console.log(authObject) ;
        });

    // function getAuth(){
    // };

    // getAuth() ;

    var authentication = 
    {
        login: function(username,password){
          return au.signInWithEmailAndPassword(username,password).then(function(authData){
            console.log('authData after login:');
            console.log(authData);
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
                console.log('signout successfully ');
                $cookies.remove('authenticatedUser');
                $cookies.remove('authData');
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