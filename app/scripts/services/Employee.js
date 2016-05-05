//Useful link    http://stackoverflow.com/questions/15666048/angularjs-service-vs-provider-vs-factory



// 'use strict';
// function Charge(montlyCharge, setupCharge){

// 		this.montlyCharge = montlyCharge ;
// 		this.setupCharge = setupCharge ;
// 		this.isMonthlyEditable = true;
// 		this.IsSetupEditable = true ;
// };
	
// angular.module('dealerPortalApp').factory('Charge',[function (montlyCharge,setupCharge){
// 	'use strict';
// 	return new Charge(montlyCharge,setupCharge) ;
// }]);


//=========================================================
// 'use strict';
// function Charge(montlyCharge, setupCharge){

// 		this.montlyCharge = montlyCharge ;
// 		this.setupCharge = setupCharge ;
// 		this.isMonthlyEditable = true;
// 		this.IsSetupEditable = true ;
// };
// angular.module('dealerPortalApp').factory('Charge',[function (){
// 	'use strict';
// 	return function(montlyCharge,setupCharge){
// 		 return new Charge(montlyCharge,setupCharge) ;
// 	};
// }]);

//Wrapping Employee class within angular provider

//=========================================================
angular.module('myblogApp').provider('Employee',[function EmployeeProvider(){
	'use strict';
	
	function Employee(name,age){
			this.name = name;
			this.age = age;
			this.isEnabled = true;
	}

	Employee.prototype.getFullDetails = function(){
		return (this.name +' ' + this.age+ ' years old.');
	};

	Employee.prototype.setAge = function(value){
			this.age = value;
	};


	Employee.build = function(data){
		return new Employee(data.name, data.age);
	};

	this.$get = [function(){
		return Employee;
	}];
}]);



//=========================================================
//Wrapping Charge class within angular factory
//=========================================================

// angular.module('dealerPortalApp').factory('Charge',[function () {
 
//   /**
//    * Constructor, with class name
//    */
//   function Charge(montlyCharge, setupCharge, isMonthlyEditable, isSetupEditable) {
//     // Public properties, assigned to the instance ('this')
//     this.montlyCharge = montlyCharge || 0;
//     this.setupCharge = setupCharge || 0;
//     this.isMonthlyEditable = isMonthlyEditable || true;
//     this.isSetupEditable = isSetupEditable || true;
//   }
 
//   /**
//    * Public method, assigned to prototype
//    */
//   Charge.prototype.getFullCharge = function () {
//     return this.montlyCharge + this.setupCharge;
//   };
 
//   /**
//    * Private property
//    */
//   var possibleRoles = ['admin', 'editor', 'guest'];
 
//   /**
//    * Private function
//    */
//   function checkRole(role) {
//     return possibleRoles.indexOf(role) !== -1;
//   }
 
//   /**
//    * Static property
//    * Using copy to prevent modifications to private property
//    */
//   Charge.possibleRoles = angular.copy(possibleRoles);
 
//   /**
//    * Static method, assigned to class
//    * Instance ('this') is not available in static context
//    */
//   Charge.build = function (data) {
//     // if (!checkRole(data.role)) {
//     //   return;
//     // }
//     return new Charge(
//       data.montlyCharge,
//       data.setupCharge,
//       data.isMonthlyEditable,
//       data.isSetupEditable
//     );
//   };
 
//   /**
//    * Return the constructor function
//    */
//   return Charge;
// }]);