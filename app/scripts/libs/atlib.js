'use strict';
console.log('atlib.js is running');

//=============================================================================
// this is an ordinary function
// if function does not return anything or return value is nothing then undefined is returned
function ordinaryfunction(){
	return 1 ;
}
var v = ordinaryfunction() ;
console.log('The result of calling ordinaryfunction is: '+v) ;


//=================================================================================================
// if we are in strinct mode this which is supposed to be invocation context of a function is undefined whereas it is global object in non strict mode.
var isStrictMode = (function(){return !this;})() ;

console.log('are we in strict mode: ' + isStrictMode) ;


//===================================================================================================
var o = {
	x: 10,
	y: 20,
	add: function(){
		var self = this; // this here is the o object ;
		function f(){
			return self.x + self.y;
		}
		return f() ;
	}
};
console.log('the add method called on o object :',o.add()) ;

//====================================================================================================
// Person is a constractor function. when is called with new keyword an instance of the Person object is automatically created before constructor is called which is 
// accessable through this keyword inside the body of the constructor. This is called constructor invocation call. The contstractor even does not have to return the object.
// in constructor invocation, constructor creates a new object, invokes the constructor as a method of that object and returns the new object. 
// prototype property of the new object will be the prototype property of the constructor meaning all the object created using constructor will inherit the same propertis and therefore 
//are the members of the sameclass 

function Person(name,age){

	this.name = name || '' ;
	this.age = age || 0 ;
}

// Now we can add some methods to Person Class like. So, we have to add methods to prototype property of the Person 
// otherwise added methods will not be in the instances created by constructor and this keyword inside that refers to the newly created object
// p is an instance of Person due to it inherits the same prototype of the Person not due to being constructed with Person
Person.prototype ={
	toString: function(){
		return 'I am '+ this.name+' '+ this.age +' years old.';
	},
	work: function(){
		return this.toString() ;
	}
};

var person = new Person('afshin',40) ;

console.log(person.work());
console.log(person instanceof Person) ;


// any javaScript function can be used as a constructor and constructor invocation needs prototype property. the value of this property is an object with a single property called constructor .
// Constructor property is pointing to the function to which prototype property belongs. 

var F = function (){}; //F is a function object
var p1 = F.prototype ; // it has a prototype property 
console.log(p1.constructor === F); // which has a constructor property which is the function object



// with the above way of defining some methods for Person we litrally overwrite the prototype property which is not a good idea, 
// so that we can set it back like this 
Person.prototype.constructor = Person;

// then we will have the prototype and it's constructor property back 
var pp = Person.prototype ;
if(pp.constructor === Person){
	console.log('our class has got its prototype object back');
}



// Or alternatively we can just not overwrite the prototype and make our class definition like Factory class
// constructor function
function Factory(name,numberofPeople)
{
	this.name = name || '';
	this.count = numberofPeople || 0;
	this.employees = [];
}
// adding methods to prototype object of the constructor function or class Factory
Factory.prototype.toString = function(){ 
	return 'Factory '+this.name+' has '+ this.count+' employees.';
};

//this method hire an employee
Factory.prototype.hire = function(person){
	if(person){ 
		this.employees.push(person);
		this.count++;
	}
};

Factory.prototype.foreach = function(f){
	for(var i=0; i<this.employees.length;i++)
	{
		f(this.employees[i]) ;
	}
};

var factory = new Factory('BMW') ;
factory.hire(person);

factory.foreach(function(pers){
	console.log(pers.toString());
});