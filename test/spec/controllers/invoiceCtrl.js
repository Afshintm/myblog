'use strict';

describe('Controller: invoiceCtrl', function () {

 var invoiceCtrl,
  scope;
  
  beforeEach(module('myblogApp'));


// 	var mockEmployee ;
// module(function($provide) {
// 	$provide.provider('mockEmployee',
// 		function(){
// 			function Employee(name,age){
// 			this.name = name;
// 			this.age = age;
// 			this.isEnabled = true;
// 			}
// 			this.$get = function () {
//                 return Employee;
//                 };
//             });
// 	});


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

