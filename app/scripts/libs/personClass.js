'use strict';

// (function(){

	function Person(firstName,lastName){
		this.firstName = firstName||'';
		this.lastName = lastName||'';
		this.setFirstName = function(f){
			this.firstName = f;
		};
		this.setLastName = function(l){
			this.lastName = l;
		};
		this.$get = function(){
			return new Person(this.firstName,this.lastName);
		};
	}
// }
// )();


angular.module('person',[])
.provider('person',function(){
	return new Person();
});