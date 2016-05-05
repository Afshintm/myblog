'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('mytodoApp','firebase'));
  var MainCtrl,
  scope,
  configProviderObj;

  // load the controller's module

  module(function ($provide) {
    $provide.provider('config', function(){
      this.env = jasmine.createSpy('env') ;
      // {
      //    'name': 'development',
      //   'apiEndpoint': 'http://localhost/BackendServices'
      // };
      this.$get = function(){
        //var getENV = jasmine.createSpy('getENV');
        return;
        //return env ;
      };
    });
  });

  module(function(configProvider){
    configProviderObj = configProvider ;
  });


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    console.log(scope.awesomeThings.length);
    //expect(scope.awesomeThings.length).toBe(4);
  });
});


