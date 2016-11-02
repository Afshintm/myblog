'use strict';
angular.module('myblogApp')
.factory('authorization', ['$rootScope', '$state', 'myauth','$q',
  function($rootScope, $state, myauth,$q) {

    return {
      authorize: function() {
        var authData = myauth.authObj();
        console.log('We are authorizing the user...') ;
        if (authData){

        }
        else
        {
          console.log($rootScope.toState);
          $rootScope.returnToState = $rootScope.toState;
          $rootScope.returnToStateParams = $rootScope.toStateParams;
        }
        return $q.when(authData);
      }
    };
  }
]);