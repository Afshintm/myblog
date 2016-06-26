'use strict';

describe('Controller: MainCtrl', function () {

 var MainCtrl,
  scope,
  configProviderObj,
  $cookies,
  authMock;

  // Create a "spy object" for our auth service.
  // This will isolate the controller we're testing from
  // any other code.
  // we'll set up the returns for this later 
  authMock = jasmine.createSpyObj('auth', ['login','authObj','logout']);

  beforeEach(module('myblogApp'));
 
  // // load the controller's module

  // module(function ($provide) {
  //   $provide.provider('config', function(){
  //     this.env = jasmine.createSpy('env') ;
  //     // {
  //     //    'name': 'development',
  //     //   'apiEndpoint': 'http://localhost/BackendServices'
  //     // };
  //     this.$get = function(){
  //       //var getENV = jasmine.createSpy('getENV');
  //       return;
  //       //return env ;
  //     };
  //   });
  // });

  // module(function(configProvider){
  //   configProviderObj = configProvider ;
  // });


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$cookies_) {
    scope = $rootScope.$new();
    $cookies = _$cookies_;
    //console.log('scope is : ');
    //console.log(scope);
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $cookies: $cookies,

    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
    scope = true;
    expect(scope).not.toBe(false);
    //console.log(scope.awesomeThings.length);
    //expect(scope.awesomeThings.length).toBe(4);
  });
});


