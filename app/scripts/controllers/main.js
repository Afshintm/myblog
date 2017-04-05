'use strict';

/**
 * @ngdoc function
 * @name myblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myblogApp
 */
angular.module('myblogApp')
  .controller('MainCtrl', ['$scope','$cookies','config','$state','firebaseProductsDb','myauth',function ($scope,$cookies,config,$state,firebaseProductsDb,myauth) {
    $scope.logout = function(){
      myauth.logout();
      $scope.isAuthenticated = false ;
    };
    $scope.login = function(){
      console.log('go to login');
      $scope.isAuthenticated = true ;
      $state.go('login');

    };
    $scope.isAuthenticated = false ;


    var cookiesData= {} ;
    var rawAuthData = $cookies.get('authData');
    if (rawAuthData){
        cookiesData = JSON.parse(rawAuthData);
    }

    $scope.authData = myauth.authObj();

    if ($scope.authData){
      $scope.isAuthenticated = true ;
    }else
    {
        $scope.isAuthenticated = false;
    }
      
    if ($scope.authData){
      $scope.authenticatedUserEmail = $scope.authData.email ;
    }else
    {
      $scope.authenticatedUserEmail = '' ;
    }


    $scope.awesomeThings = [
      'Fully responsive pages working with all desktop, tablet and mobile devices',
      'Bootstrap 3 UI enabled',
      'AngularJs development framework',
      'Jasmine test framework'
    ];
  }]);
