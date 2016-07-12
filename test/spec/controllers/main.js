'use strict';

describe('Controller: MainCtrl', function () {

 var MainCtrl,
  scope,
  $cookies,
  authMock, $window,
     $state;


  // Create a "spy object" for our auth service.
  // This will isolate the controller we're testing from
  // any other code.
  // we'll set up the returns for this later
  authMock = jasmine.createSpyObj('auth', ['login','logout']);
  authMock.authObj = {
    $getAuth : function(){
      return {
        auth:{
          token:{
            email:'email@address.com'
          }
        }
      };
    }
  };

  beforeEach(module('myblogApp'));

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$cookies_,_$state_,_$window_) {
    $window = _$window_;
    $window.sessionStorage = { // mocking sessionStorage
            getItem: function(key) {
                return this[key];
            }
        };

    scope = $rootScope.$new();
    $cookies = _$cookies_;
    $state = _$state_ ;

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $cookies: $cookies,
      auth:authMock,
      $state:$state
    });
    console.log('instantiated the controller') ;
  }));

  it('should attach a list of awesomeThings to the scope', function () {

    expect(scope).not.toBe(null);
    //console.log(scope);
    expect(scope.awesomeThings.length).toBe(4);
  });
});

//===================

// 'use strict';

// describe('Controller: MainCtrl', function () {
//
//   var MainCtrl,
//     scope,
//     configProviderObj,
//     $cookies,
//     authMock;
//
//   // Create a "spy object" for our auth service.
//   // This will isolate the controller we're testing from
//   // any other code.
//   // we'll set up the returns for this later
//   authMock = jasmine.createSpyObj('auth', ['login','authObj','logout']);
//
//   beforeEach(module('myblogApp'));
//
//   // // load the controller's module
//
//   // module(function ($provide) {
//   //   $provide.provider('config', function(){
//   //     this.env = jasmine.createSpy('env') ;
//   //     // {
//   //     //    'name': 'development',
//   //     //   'apiEndpoint': 'http://localhost/BackendServices'
//   //     // };
//   //     this.$get = function(){
//   //       //var getENV = jasmine.createSpy('getENV');
//   //       return;
//   //       //return env ;
//   //     };
//   //   });
//   // });
//
//   // module(function(configProvider){
//   //   configProviderObj = configProvider ;
//   // });
//
//
//   beforeEach(
//     function(){
//
//       module(function($provide){
//         $provide.service('$window', function(){
//           this.alert= jasmine.createSpy('alert');
//         });
//         $provide.service('modalSvc', function(){
//           this.showModalDialog = jasmine.createSpy('showModalDialog');
//         });
//       });
//
//       module('services');
//     });
//
//
//   // Initialize the controller and a mock scope
//   beforeEach(inject(function ($controller, $rootScope,_$cookies_) {
//     scope = $rootScope.$new();
//     $cookies = _$cookies_;
//     //console.log('scope is : ');
//     //console.log(scope);
//     MainCtrl = $controller('MainCtrl', {
//       $scope: scope,
//       $cookies: $cookies,
//
//     });
//   }));
//
//   it('should attach a list of awesomeThings to the scope', function () {
//     expect(true).toBe(true);
//     scope = true;
//     expect(scope).not.toBe(false);
//     //console.log(scope.awesomeThings.length);
//     //expect(scope.awesomeThings.length).toBe(4);
//   });
// });
//
//
