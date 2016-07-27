'use strict';
angular.module('myblogApp').
//factory('auth',['firebaseRef','fbProductsUrl','UserService','$window','$cookies','config','firebaseProductsDb',
//    function(firebaseRef,fbProductsUrl,$firebaseAuth,UserService,$window,$cookies,config,firebaseProductsDb){
  factory('myauth',['firebaseProductsDb','UserService','$cookies',function(firebaseProductsDb,UserService,$cookies){
    console.log('within auth factrory');
    //console.log(config);
    console.log(firebaseProductsDb);

    var au = firebase.auth() ;
    console.log(au);
    var authObject = au.signInWithEmailAndPassword('afshin_tm@yahoo.com', '123');
    console.log(authObject);

    //var authObject ='tempAuthObject';

    var authentication = 
    {
        // login: function(username,password){
        //    return authObject.$authWithPassword({
        //       email: username,
        //       password: password
        //     }).then(function(authData) {
        //       console.log('authData after login:');
        //       console.log(authData);
        //       UserService.init(username,password,authData);
              
        //       $cookies.put('authenticatedUser',UserService);
        //       $cookies.put('test1','test1Value');
        //       $cookies.put('authData',JSON.stringify(authData));
        //       $window.sessionStorage.authenticatedUser = UserService ;
        //     }).catch(function(error) {
        //       console.error('Authentication failed: ', error);
        //     }); 
        // },
        // authObj : authObject,
        // logout : function(){
        //   console.log('logout is called in auth factory');

        //   var currentAuth = authObject.$getAuth();
        //   if (currentAuth!==null){
        //     console.log('We are logging out');
        //     authObject.$unauth();
        //     $cookies.remove('authenticatedUser');
        //     $cookies.remove('authData');
        //   }
        // }
        login: function(username,password){
          return au.signInWithEmailAndPassword(username,password).then(function(authData){
            console.log('authData after login:');
            console.log(authData);
            UserService.init(username,password,authData);
            
            $cookies.put('authenticatedUser',UserService);
            $cookies.put('test1','test1Value');
            $cookies.put('authData',JSON.stringify(authData));


          }).catch(function(error){});
          return true ;
        },
        logout: function(){
          return true ;
        },
        authObj:authObject
    };
    return authentication ;
//});
}]);