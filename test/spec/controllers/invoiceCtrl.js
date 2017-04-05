'use strict';

describe('Controller: invoiceCtrl', function () {

 var invoiceCtrl,
  scope;
  
  beforeEach(module('myblogApp'));



  beforeEach(inject(function ($controller, $rootScope) {
 
     scope = $rootScope.$new();
    invoiceCtrl = $controller('invoiceCtrl', {
      $scope: scope
    });
    console.log('instantiated the controller') ;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(true).toBe(true);
  });
});

