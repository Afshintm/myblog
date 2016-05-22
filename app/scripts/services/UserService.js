
// try not to inject anything but filters or oter models to a model class like the following 
//angular.module('myblogApp').service('UserService',['ENV','fbProductsUrl','firebaseRef','$http','$q','utils',function(ENV,fbProductsUrl,firebaseRef,$http,$q,utils){
angular.module('myblogApp').service('UserService',[function(){    
	'use strict';

    //As  function passed to service recipie in angularJs is a constructor Function
    // this points to the object instantiated, for which the current constructor is called. 
    // so this has a property called constructor which points to the constructor function which also has a prototype property
    //console.log('this here is an instance object which points to the object instantiated');
    //console.log(this) ;

    //console.log('this, however has a constructor property which points to the current constructor function. ');

    //console.log(this.constructor);
    var proto = this.constructor.prototype;
    
    // we are using method init to give the username and password so that, in another controllers, 
    // we call it like UserService.init(username,password) 

    proto.init = function(username,password,authData){
        this.username = username || '' ;
        this.password = password || '' ;

        this.uid = authData && authData.auth && authData.auth.uid;
        this.provider = authData && authData.auth && authData.auth.provider;
        this.token = authData && authData.token;
        this.isAuthenticated = (this.uid && (this.uid!==null));
    };
    
    proto.toString = function(){
        return this.username ;
    };

    //     return ('The user '+username) ;
    // };

    // UserService.prototype.getUserbyUsername = function(username){
    //     var result  = $q.defered() ;
    //     result.resolve('success') ;
    //     return result.promise;
    //     //$http.get()
    // };

    // UserService.build  = function(username,password){
    //     var newUserService = new UserService(username,password);
    //     return newUserService;
    // };
}]);

//JavaScript_definitive_Guid_Page_203



// As we’ve seen, the prototype object is fundamental to the identity of a class: two objects are instances of the same class if and only if they inherit from the same prototype object. 
//The constructor function that initializes the state of a new object is not fundamental: two constructor functions may have prototype properties that point to the same prototype object. 
//Then both constructors can be used to create instances of the same class.

// Even through constructors are not as fundamental as prototypes, the constructor serves as the public face of a class. 
// Most obviously, the name of the constructor function is usually adopted as the name of the class. We say, for example, that the Range() constructor creates Range objects. 
// More fundamentally, however, constructors are used with the instanceof operator when testing objects for membership in a class. 
// If we have an object r and want to know if it is a Range object, we can write:

// r instanceof Range // returns true if r inherits from Range.prototype

// The instanceof operator does not actually check whether r was initialized by the Range constructor. It checks whether it inherits from Range.prototype. 
// Nevertheless, the instanceof syntax reinforces the use of constructors as the public identity of a class. We’ll see the instanceof operator again later in this chapter.

// 9.2.2 The constructor Property
// In Example 9-2 we set Range.prototype to a new object that contained the methods for our class. 
// Although it was convenient to express those methods as properties of a single object literal, it was not actually necessary to create a new object.
// Any JavaScript function can be used as a constructor, and constructor invocations need a prototype property. 
// Therefore, every JavaScript function (except functions returned by the EC- MAScript 5 Function.bind() method) automatically has a prototype property.
// The value of this property is an object that has a single nonenumerable constructor property. The value of the constructor property is the function object:
// var F = var p = var c = c === F
// function() {}; // This is a function object.
// F.prototype; // This is the prototype object associated with it. p.constructor; // This is the function associated with the prototype.
// // => true: F.prototype.constructor==F for any function
//   9.2 Classes and Constructors
// | 203
// Core JavaScript
// The existence of this predefined prototype object with its constructor property means that objects typically inherit a constructor property that refers to their constructor. Since constructors serve as the public identity of a class, this constructor property gives the class of an object:
// var o = new F(); // Create an object o of class F
// o.constructor === F // => true: the constructor property specifies the class
// Figure 9-1 illustrates this relationship between the constructor function, its prototype object, the back reference from the prototype to the constructor, and the instances created with the constructor.
