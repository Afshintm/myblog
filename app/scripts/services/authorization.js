'use strict';
angular.module('myblogApp')
.factory('authorization', ['$rootScope', '$state', 'myauth','$q',
  function($rootScope, $state, myauth,$q) {

    return {
      authorize: function() {
        var authData = myauth.authObj;
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
          // .then(function() {
          //   var isAuthenticated = principal.isAuthenticated();

          //   if ($rootScope.toState.data.roles && 
          //       $rootScope.toState.data.roles.length > 0 && 
          //       !principal.isInAnyRole($rootScope.toState.data.roles)) {
          //     if (isAuthenticated) $state.go('accessdenied'); // user is signed in but not authorized for desired state
          //     else {
          //       // user is not authenticated. stow the state they wanted before you
          //       // send them to the signin state, so you can return them when you're done
          //       $rootScope.returnToState = $rootScope.toState;
          //       $rootScope.returnToStateParams = $rootScope.toStateParams;

          //       // now, send them to the signin state so they can log in
          //       $state.go('signin');
          //     }
          //   }
          // });
      }
    };
  }
]);